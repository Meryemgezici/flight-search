import { useDispatch } from "react-redux";
import { sortFlightsByPrice } from "../redux/slices/flightsSlice";

const FilterBtn = ({feature}) => {
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(sortFlightsByPrice({ sortBy: "asc" }));
    }
  return (
    <div className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow-md" onClick={handleClick}>
      {feature}
    </div>
  )
}

export default FilterBtn
