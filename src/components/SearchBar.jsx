import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import { locationOpt } from "../utils/constants";
import { FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import view from '../images/view.png';
import tr from 'date-fns/locale/tr';

const SearchBar = () => {
  const [departureCode, setDepartureCode] = useState(null);
  const [destinationCode, setDestinationCode] = useState(null);
  const [date, setDate] = useState(null);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [returnDate, setReturnDate] = useState(null);
  const today = new Date();
  const navigate = useNavigate();


  const formatDate = (date) => {
    if (!date) return null;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handleSearch = () => {
    if (departureCode && destinationCode && date && (!isRoundTrip || returnDate)) {
      if (departureCode.value !== destinationCode.value) {
        if (!isRoundTrip || returnDate >= date) {
          const formattedDate = formatDate(date);
          const formattedReturnDate = isRoundTrip ? formatDate(returnDate) : null;

          navigate(
            `/listpage?departureCode=${departureCode.value}&destinationCode=${destinationCode.value}&departureDate=${formattedDate}&returnDate=${formattedReturnDate}`
          );
        } else {
          toast.error("Dönüş tarihi, gidiş tarihinden önce olamaz.");
        }
      } else {
        toast.error("Nereden ve Nereye şehirleri aynı olamaz.");
      }
    } else {
      toast.error("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="text-black">
      <div className="relative">
        <img src={view} alt="view" className="h-[450px] w-full object-cover" />
      </div>
      <div className="flex flex-col gap-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <h1 className="text-3xl font-bold text-white">Fly With Us</h1>
        <div className="flex flex-col gap-4 border bg-white p-5 rounded-xl shadow-md">
          <div className="flex gap-6 items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="roundTrip"
                checked={isRoundTrip}
                onChange={() => setIsRoundTrip(!isRoundTrip)}
              />
              <label htmlFor="roundTrip" className="ml-2">
                Gidiş-Dönüş
              </label>
            </div>

            <div className="flex items-center ml-6">
              <input
                type="checkbox"
                id="oneWay"
                checked={!isRoundTrip}
                onChange={() => setIsRoundTrip(!isRoundTrip)}
              />
              <label htmlFor="oneWay" className="ml-2">
                Tek Yön
              </label>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="relative">
              <label>Nereden:</label>
              <Select
                className="text-black w-52"
                options={locationOpt}
                value={departureCode}
                onChange={(selectedOption) => setDepartureCode(selectedOption)}
                placeholder="Seçiniz"
                styles={{
                  valueContainer: (provided) => ({
                    ...provided,
                    paddingLeft: "2rem",
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: '70px',
                  }),
                }}
              />
              <div className="absolute top-[50px] left-2 text-gray-700 ">
                <FaLocationDot />
              </div>
            </div>
            <div className="relative">
              <label>Nereye:</label>
              <Select
                options={locationOpt}
                value={destinationCode}
                onChange={(selectedOption) => setDestinationCode(selectedOption)}
                className="text-black w-52"
                styles={{
                  valueContainer: (provided) => ({
                    ...provided,
                    paddingLeft: "2rem",
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: '70px',
                  }),
                }}
                placeholder="Seçiniz"
              />
              <div className="absolute top-[50px] left-2 text-gray-700">
                <FaLocationDot />
              </div>
            </div>
            <div className="flex flex-col relative">
              <label>Gidiş Tarihi:</label>
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                dateFormat="dd/MM/yyyy"
                className="border rounded-md w-52 p-[6px] pl-8 text-black h-[70px]"
                placeholderText="Seçiniz"
                locale={tr}
                minDate={today}
              />
              <SlCalender className="absolute top-[50px] left-2 text-gray-700" />
            </div>

            {isRoundTrip && (
              <div className="flex flex-col relative">
                <label>Dönüş Tarihi:</label>
                <DatePicker
                  selected={returnDate}
                  onChange={(newDate) => setReturnDate(newDate)}
                  dateFormat="dd/MM/yyyy"
                  className="border rounded-md w-52 p-[6px] pl-8 text-black h-[70px]"
                  placeholderText="Seçiniz"
                  minDate={today}
                  locale={tr}
                />
                <SlCalender className="absolute top-[50px] left-2 text-gray-700" />
              </div>
            )}

            <button
              className="bg-gradient-to-r  from-[#ff3f48] to-[#ff7461] text-white text-xl font-bold transition-all hover:from-[#ff7461] hover:to-[#ff3f48] rounded-md mt-6 w-[100px] p-2 "
              onClick={handleSearch}
            >
              Ara
            </button>
          </div>
        </div>
      </div>

    </div>


  )
}

export default SearchBar
