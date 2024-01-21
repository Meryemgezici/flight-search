import { useEffect } from "react";
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
    const date = searchParams.get("date");

    useEffect(() => {
        if (departureCode && destinationCode && date) {
            dispatch(filterFlights({ departureCode, destinationCode, date }));
        }
    }, [dispatch, departureCode, destinationCode, date]);

    return (
        <>
            {state.isLoading ? <Loading /> : <>
                <SearchBar />
                <h1 className="text-3xl  text-center text-black mt-32">
                    {state.filteredFlights.length === 0 && "Uçuş Bulunamadı."}
                </h1>
                {state.filteredFlights.length > 0 && (
                    <div className="flex flex-col relative">
                        <div className="flex flex-col gap-4  mx-auto mb-32 mt-7 max-w-[1000px]" >
                            <div className="mb-10">
                                <button className="border px-6 py-2 text-xl bg-gradient-to-r  from-[#ff3f48] to-[#ff7461] text-white rounded-lg p-2 font-bold transition-all hover:from-[#ff7461] hover:to-[#ff3f48] w-[100px] mb-8">Gidiş</button>
                                <div className="flex items-center gap-4">

                                    <GiCommercialAirplane className='text-xl' />
                                    <p>{state.filteredFlights[0].departure}</p>
                                    <FaArrowRightLong className="text-2xl"/>
                                    <p>{state.filteredFlights[0].destination}</p>
                                    <span>{state.filteredFlights[0].date}</span>
                                </div>
                                
                            </div>
                            <SortCard />
                            <div className="flex flex-col gap-6 bg-[#F9F9F9]  p-4 rounded-lg">
                                {state.filteredFlights.map((flight) => (
                                    <FlightCard flight={flight} key={flight.id} />
                                ))}
                            </div>
                        </div>

                    </div>
                )}
            </>}


        </>
    )
}

export default ListPage
