import { GiCommercialAirplane } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import PriceCard from "./PriceCard";

const FlightCard = ({ flight }) => {
  return (
    <div className="flex gap-6">
      <div className="flex bg-white w-[600px] border rounded-md p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-14">
            <div className="flex flex-col gap-1">
              <span className="font-bold">{flight.departureTime}</span>
              <span className="text-[#697886] text-sm">{flight.departureCode.toUpperCase()}</span>
              <span className="text-[#697886] text-sm">{flight.departure.charAt(0).toUpperCase() + flight.departure.slice(1)}</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Direkt</span>
              <div className="flex items-center">
                <GoDotFill />
                <div className="border-b w-64"></div>
                <GoDotFill />
              </div>
              <GiCommercialAirplane className='text-xl' />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">{flight.destinationTime}</span>
              <span className="text-[#697886] text-sm">{flight.destinationCode.toUpperCase()}</span>
              <span className="text-[#697886] text-sm">{flight.destination.charAt(0).toUpperCase() + flight.destination.slice(1)}</span>
            </div>
          </div>
          <div className="border-b-2 border-dashed  w-[550px]"></div>
          <div className="flex gap-7">
            <p className="text-sm text-[#697886]">Uçuş süresi: <span className="font-bold">{flight.flightTime}</span></p>
            <p className="text-sm text-[#697886]">Uçak tipi: <span className="font-bold ">{flight.planeType}</span></p>
          </div>
        </div>
      </div>
      <PriceCard pricePackage={"ECONOMY"} price={flight.economicPrice} />
      <PriceCard pricePackage={"BUSINESS"} price={flight.businessPrice} />
    </div>
  );
};

export default FlightCard;
