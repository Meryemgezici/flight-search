import { locationOpt } from "../utils/constants";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
    const [departure, setDeparture] = useState(null);
    const [destination, setDestination] = useState(null);
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
        if (departure && destination && date && (!isRoundTrip || returnDate)) {
            // Check if departure and destination are different
            if (departure.value !== destination.value) {
                const formattedDate = formatDate(date);
                const formattedReturnDate = isRoundTrip ? formatDate(returnDate) : null;

                navigate(
                    `/listpage?departure=${departure.value}&destination=${destination.value}&date=${formattedDate}&returnDate=${formattedReturnDate}`
                );
            } else {
                toast.error("Nereden ve Nereye şehirleri aynı olamaz.");
            }
        } else {
            toast.error("Lütfen tüm alanları doldurun.");
        }
    };

    return (
        <div className="bg-zinc-800 h-[100vh] grid place-items-center">
            <div className="bg-black text-white  flex flex-col gap-10 py-16 px-32 rounded-lg ">
                <h1 className="font-bold text-center text-xl">Sefer Sorgulama</h1>
                <div className="flex gap-6 items-center">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="roundTrip"
                            checked={isRoundTrip}
                            onChange={() => setIsRoundTrip(!isRoundTrip)}
                        />
                        <label htmlFor="roundTrip" className="ml-2 text-white">
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
                        <label htmlFor="oneWay" className="ml-2 text-white">
                            Tek Yön
                        </label>
                    </div>
                </div>

                <div className="flex gap-6">
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
                </div>

                <div className="flex gap-6">
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

                    {isRoundTrip && (
                        <div className="flex flex-col relative">
                            <label>Dönüş Tarihi:</label>
                            <DatePicker
                                selected={returnDate}
                                onChange={(newDate) => setReturnDate(newDate)}
                                dateFormat="dd/MM/yyyy"
                                className="border rounded-md w-52 p-[6px] pl-8 text-black"
                                placeholderText="Seçiniz"
                                minDate={today}
                            />
                            <SlCalender className="absolute top-[35px] left-2 text-gray-700" />
                        </div>
                    )}
                </div>

                <button
                    className="bg-gradient-to-r  from-[#ff3f48] to-[#ff7461] text-white text-xl font-bold transition-all hover:from-[#ff7461] hover:to-[#ff3f48] rounded-md mt-6 w-full p-2 "
                    onClick={handleSearch}
                >
                    Ara
                </button>
            </div>
        </div>
    );
};

export default HomePage;
