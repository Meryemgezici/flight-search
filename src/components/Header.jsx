import { GiCommercialAirplane } from "react-icons/gi";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-[#0F0F0F] text-white ">
            <button className="flex items-center gap-3 text-3xl">
                <GiCommercialAirplane className='text-5xl' />
                <h1>Fly With Us</h1>
            </button>
            <div className='flex gap-5 items-center mr-4'>
                <button
                    type="submit"
                    className="bg-gradient-to-r  from-[#ff3f48] to-[#ff7461] text-white rounded-lg p-2 font-bold transition-all hover:from-[#ff7461] hover:to-[#ff3f48]"
                >
                    Giriş Yap
                </button>
                <button
                    type="submit"
                    className="bg-gradient-to-r  from-[#ff3f48] to-[#ff7461] text-white rounded-lg p-2 font-bold transition-all hover:from-[#ff7461] hover:to-[#ff3f48]"
                >
                    Üye Ol
                </button>
            </div>
        </header>
    );
};

export default Header;