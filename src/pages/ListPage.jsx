import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterFlights } from "../redux/slices/flightsSlice";
import Loading from "../components/Loading";
import FlightCard from "../components/FlightCard";
import FilterCard from "../components/FilterCard";

const ListPage = () => {
    const state = useSelector((store) => store.flightsSlice);
    const dispatch = useDispatch();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const departure = searchParams.get("departure");
    const destination = searchParams.get("destination");
    const date = searchParams.get("date");

    useEffect(() => {
        if (departure && destination && date) {
            dispatch(filterFlights({ departure, destination, date }));
        }
    }, [dispatch, departure, destination, date]);

    return (
        <div className="bg-white min-h-screen text-black">
            {state.isLoading && <Loading />}
          
                <h1 className="text-3xl m-7 text-center">
                    {state.filteredFlights.length > 0
                        ? `${state.filteredFlights.length} Adet Uçuş Seferi Bulundu.`
                        : "Uçuş Seferi Bulunamadı."}
                </h1>
                {state.filteredFlights.length > 0 && (
                    <div>
                        <h2 className="text-2xl text-center">
                            {state.filteredFlights[0].date} Tarihindeki Uçak Seferleri
                        </h2>
                        <div className="flex flex-col gap-4  mx-auto mb-32 mt-7 max-w-[1000px]" >
                            <FilterCard/>
                            <div className="flex flex-col gap-6 bg-[#F9F9F9]  p-4  ">
                                {state.filteredFlights.map((flight) => (
                                    <FlightCard flight={flight} key={flight.id}/>
                                ))}
                            </div>
                        </div>

                    </div>
                )}
         
        </div>
    )
}

export default ListPage
