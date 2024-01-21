import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterFlights } from "../redux/slices/flightsSlice";
import Loading from "../components/Loading";
import FlightCard from "../components/FlightCard";
import SearchBar from "../components/SearchBar";
import SortCard from "../components/SortCard";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const ListPage = () => {
    const state = useSelector((store) => store.flightsSlice);
    const dispatch = useDispatch();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const departureCode = searchParams.get("departureCode");
    const destinationCode = searchParams.get("destinationCode");
    const departureDate = searchParams.get("departureDate");
    const returnDate = searchParams.get("returnDate");
    const [date, setDate] = useState(departureDate);
    const [departureFlights, setDepartureFlights] = useState("yes");
    const [destinationFlights, setDestinationFlights] = useState("no");


    useEffect(() => {
        if (departureCode && destinationCode && date) {
            dispatch(filterFlights({ departureCode, destinationCode, date, destinationFlights, departureFlights }));
        }
    }, [dispatch, departureCode, destinationCode, date, destinationFlights, departureFlights]);

    const handleGoButtonClick = () => {
        setDepartureFlights("yes");
        setDestinationFlights("no");
        setDate(departureDate)
        dispatch(filterFlights({ departureCode, destinationCode, date, destinationFlights, departureFlights }));
    };

    const handleReturnButtonClick = () => {
        if (returnDate) {
            setDepartureFlights("no");
            setDestinationFlights("yes");
            setDate(returnDate)
            dispatch(filterFlights({ departureCode, destinationCode, date }));
        }
    };

    return (
        <>
            {state.isLoading ? <Loading /> : <>
                <SearchBar />
                <div className="flex flex-col relative mt-32">
                    <div className="flex flex-col gap-4  mx-auto mb-32 mt-7 max-w-[1000px]" >
                        <div className="flex gap-6 mb-5">
                            <button className="border px-6 py-2 text-xl bg-gradient-to-r  from-[#ff3f48] to-[#ff7461] text-white rounded-lg font-bold transition-all hover:from-[#ff7461] hover:to-[#ff3f48] w-[100px]"
                                onClick={handleGoButtonClick}
                            >
                                Gidiş
                            </button>
                            {returnDate !== "null" && <button className={`border px-6 py-2 text-xl rounded-lg font-bold w-[100px] text-center ${returnDate ? "bg-gradient-to-r from-[#ff3f48] to-[#ff7461] text-white hover:from-[#ff7461] hover:to-[#ff3f48]" : "bg-gray-400 cursor-not-allowed"
                                }`}
                                onClick={handleReturnButtonClick}
                                disabled={!returnDate}
                            >
                                Dönüş
                            </button>}

                        </div>
                        {state.filteredFlights.length > 0 ? (
                            <>
                                <div className="flex items-center gap-4 mb-10">
                                    <GiCommercialAirplane className='text-xl' />
                                    <p>{state.filteredFlights[0].departure}</p>
                                    <FaArrowRightLong className="text-2xl" />
                                    <p>{state.filteredFlights[0].destination}</p>
                                    <span>{state.filteredFlights[0].date}</span>
                                </div>
                                <SortCard />
                                <div className="flex flex-col gap-6 bg-[#F9F9F9]  p-4 rounded-lg">
                                    {state.filteredFlights.map((flight) => (
                                        <FlightCard flight={flight} key={flight.id} />
                                    ))}
                                </div>
                            </>

                        ) : <h1 className="text-3xl  text-center text-black mt-32">
                            {state.filteredFlights.length === 0 && "Uçuş Bulunamadı."}
                        </h1>}
                    </div>
                </div>
            </>}
        </>
    )
}

export default ListPage
