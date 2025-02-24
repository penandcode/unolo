import { useEffect, useState } from "react";

const Table = ({ label, data, columns }) => {
    const columnKeys = Object.keys(columns);



    const [response, setResponse] = useState(data);
    const [search, setSearch] = useState("")

    useEffect(() => {
        setResponse(data)
    }, [JSON.stringify(data)])

    useEffect(() => {
        if (!search.length) {
            setResponse(data)
        } else {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            setResponse(filteredData)
        }
    }, [search])

    return (
        <div>
            <div className="bg-white rounded-lg">
                <div className="flex justify-between mx-4 py-2">
                    <p className="font-bold text-xl">{label}</p>
                    <div>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-[150px] border-2 border-gray-200 rounded-lg px-2 py-1" placeholder="Search here" />
                    </div>
                </div>
                <div className="rounded-lg border m-4 h-[600px]">
                    <div className="grid grid-cols-3 font-bold border-b p-2 text-gray-800 bg-amber-50 rounded-t-lg">
                        {columnKeys.map((key, index) => <div key={index}>{columns[key]}</div>)}


                    </div>

                    {response.map((emp, index) => (
                        <div key={index} className="grid grid-cols-3 items-start py-4 border-b border-gray-300 flex-wrap">
                            <div className="flex items-center gap-3 ml-3">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-bold">
                                    {emp.name.split(" ")[0][0] + emp.name.split(" ")[1][0]}
                                </div>
                                <div className="text-sm">
                                    <div className="font-semibold">{emp.name}</div>
                                </div>
                            </div>

                            <div className="text-sm">
                                <div className="font-medium">{emp.attendance}</div>
                                {emp.source && <div className="text-gray-500">From : {emp.source}</div>}
                            </div>

                            <div className="text-sm">
                                <div>{emp.location}</div>
                                {emp.timeAgo && <div className="text-gray-500 mt-1">{emp.timeAgo}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Table;
