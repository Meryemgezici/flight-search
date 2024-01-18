import { IoIosArrowForward } from "react-icons/io";
import { LuArmchair } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";


const FlightCard= ({ flight }) => {
  const location = useLocation();
  const isTripDetailPage = location.pathname.includes("/tripDetail");

  return (
    <div
      key={flight.id}
      className="flex justify-between items-center border rounded-lg bg-white p-4 w-full mt-10"
    >
      <div className="flex flex-col">
        <img
          src={flight.logo}
          alt={`Logo for ${flight.departure} to ${flight.destination}`}
          className="h-24 w-48 img-fluid"
        />
        <div className="flex items-center gap-1">
          <p>
            {flight.departure.charAt(0).toUpperCase() + flight.departure.slice(1)}
          </p>
          <IoIosArrowForward />
          <p>
            {flight.destination.charAt(0).toUpperCase() + flight.destination.slice(1)}
          </p>
        </div>
      </div>
      <div className="flex  items-center gap-2">
        <LuArmchair className="text-2xl" />
        <span>2+2</span>
      </div>

      <div className="flex flex-col">
        <span>{flight.departureTime}</span>
        <span>{flight.travelTime}</span>
        Boş Koltuk Sayısı:{flight.emptySeats}
      </div>

      <div className="flex gap-6 justify-center items-center">
        <p className="font-bold">Fiyat:{flight.price}</p>
      </div>
    </div>
  );
};

export default FlightCard;
