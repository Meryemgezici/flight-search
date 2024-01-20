import FilterBtn from "./FilterBtn"

const FilterCard = () => {
  return (
    <div className="flex flex-col gap-2">
        <h1 className="text-xl">Sıralama Kriterleri</h1>
        <div className="flex gap-4">
            <FilterBtn feature={"Ücrete göre artar"}/>
            <FilterBtn feature={"Ücrete göre azalan"}/>
            <FilterBtn feature={"Kalkış saati"}/>
            <FilterBtn feature={"Varış saati"}/>
            <FilterBtn feature={"Uçuş uzunluğu"}/>
        </div>
    </div>
  )
}

export default FilterCard
