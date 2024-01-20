import { locationOpt } from "../utils/constants"
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Select from "react-select";

const SearchBar = () => {
  // const navigate = useNavigate();
  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const today = new Date();

  //   const formatDate = (date)=> {
  //     if (!date) return null;

  //     const day = date.getDate();
  //     const month = date.getMonth() + 1;
  //     const year = date.getFullYear();

  //     return `${day}/${month}/${year}`;
  //   };


  return (
    <div className="bg-zinc-800 min-h-[100vh] grid place-items-center">
      <div className="bg-black text-white  flex gap-10 py-16 px-32 rounded-lg ">
        <h1 className="font-bold text-center text-xl">Sefer Sorgulama</h1>
        <div className="relative">
          <label>Nereden:</label>
          <Select
            className="text-black w-52"
            options={locationOpt}
            value={departure}
            onChange={(selectedOption) => setDeparture(selectedOption)}
            placeholder="Seçiniz"
            styles={{
              valueContainer: (provided) => ({
                ...provided,
                paddingLeft: "2rem",
              }),
            }}
          />
          <div className="absolute top-[35px] left-2 text-gray-700 ">
            <FaLocationDot />
          </div>
        </div>
        <div className="relative">
          <label>Nereye:</label>
          <Select
            options={locationOpt}
            value={destination}
            onChange={(selectedOption) => setDestination(selectedOption)}
            className="text-black w-52"
            styles={{
              valueContainer: (provided) => ({
                ...provided,
                paddingLeft: "2rem",
              }),
            }}
            placeholder="Seçiniz"
          />
          <div className="absolute top-[35px] left-2 text-gray-700">
            <FaLocationDot />
          </div>
        </div>


        <div className="flex flex-col relative">
          <label>Gidiş Tarihi:</label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="dd/MM/yyyy"
            className="border rounded-md w-52 p-[6px] pl-8 text-black"
            placeholderText="Seçiniz"
            minDate={today}
          />
          <SlCalender className="absolute top-[35px] left-2 text-gray-700" />
        </div>
        <button
          className="border bg-white text-black rounded-md mt-6 w-52"
        >
          Ara
        </button>
      </div>
    </div>
  )
}

export default SearchBar
