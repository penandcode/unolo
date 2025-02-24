const AttendanceCard = () => {
    const teamArr = [
        { name: "Bond", total: "12", present: "6" },
        { name: "default", total: "8", present: "3" },
        { name: "Om Bhagwan", total: "6", present: "0" },
    ]
    return <>
        <div className="h-[350px] bg-[#fff] rounded-lg">
            <p className="font-bold mx-4 py-2 text-xl">{'Teamwise Attendance'}</p>
            <div className="h-[2px] w-auto bg-gray-200 mx-4"></div>
            <div className="mx-4 py-4">
                {teamArr.map((item, key) => {
                    return <div key={key} className="flex py-2">
                        <p className="font-semibold">{item.name}</p>
                        <div className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-[50%] bg-[#3266fc]"></div>
                            <p className="font-semibold">{item.total}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-[50%] bg-[#3266fc]"></div>
                            <p className="font-semibold">{item.present}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}

export default AttendanceCard;