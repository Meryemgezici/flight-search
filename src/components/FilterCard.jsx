import { useState } from 'react';
import { useDispatch } from "react-redux";
import { sortOpt } from "../utils/constants"
import { sortFlightsByPrice } from "../redux/slices/flightsSlice";

const FilterCard = () => {
  const dispatch = useDispatch();
  const [clickCount, setClickCount] = useState(1);

  const handleClick = (sortOp) => {
    if (clickCount === 1) {
      dispatch(sortFlightsByPrice({ sortBy: sortOp + " artan" }));
      setClickCount(clickCount + 1);
    } else {
      dispatch(sortFlightsByPrice({ sortBy: sortOp + " azalan" }));
      setClickCount(1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Sıralama Kriterleri</h1>
      <div className="flex gap-4">
        {sortOpt.map((sortOp, i) => <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow-md" onClick={() => handleClick(sortOp)} key={i}>
          {sortOp}
        </button>)}
      </div>
    </div>
  )
}

export default FilterCard
