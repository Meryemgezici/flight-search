
const PriceCard = ({pricePackage,price}) => {
    return (
        <div className="flex flex-col gap-3 bg-white border rounded-lg">
            <p className={`bg-[#DFE4ED] p-2 font-bold `}>{pricePackage}</p>
            <div className="flex gap-3 items-center p-2">
            <input type="checkbox" className="rounded-full h-6 w-6 border-2 border-gray-400 checked:bg-blue-500 checked:border-transparent" />
                <div>
                    <span className="text-[#697886] text-sm">Yolcu başına</span>
                    <p className="font-bold">TRY {price}</p>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
