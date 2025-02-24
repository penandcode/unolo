const Card = ({ label, value, tooltipText }) => {
    return <>
        <div className="bg-[#fff] w-[400px] rounded-lg h-full px-4 py-2">
            <div className="w-1/2">
                <p className="font-bold text-xl">{label}</p>
            </div>
            <div className="font-bold text-3xl h-full flex justify-center items-center">
                <p>
                    {value}
                </p>
            </div>
        </div>
    </>
}

export default Card;