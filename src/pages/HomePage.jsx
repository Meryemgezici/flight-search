import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "../redux/actions/flightsAction";

import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFlights());
    }, []);

    return (
        <>
            <SearchBar />
        </>
    );
};

export default HomePage;
