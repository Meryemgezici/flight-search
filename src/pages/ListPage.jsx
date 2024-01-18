import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterFlights } from "../redux/slices/flightsSlice";
import Loading from "../components/Loading";
import FlightCard from "../components/FlightCard";

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
        <>
            {state.isLoading && <Loading />}
            <div className="mb-24">
                <h1 className="text-3xl m-7 text-center">
                    {state.filteredFlights.length > 0
                        ? `${state.filteredFlights.length} Adet Sefer Bulundu.`
                        : "Sefer Bulunamadı."}
                </h1>
                {state.filteredFlights.length > 0 && (
                    <div>
                        <h2 className="text-2xl  text-center">
                            {state.filteredFlights[0].date} Tarihindeki Uçak Seferleri
                        </h2>
                        {state.filteredFlights.map((flight) => (
                            <div className="flex flex-col justify-center items-center  gap-10 mx-24 text-black" key={flight.id}>
                                <FlightCard flight={flight} />
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    )
}

export default ListPage
