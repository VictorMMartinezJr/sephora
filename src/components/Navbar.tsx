import { navIcons } from "../constants";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full text-white z-50 h-[8vh] xl:px-20">
      <nav id="nav" className="h-full flex justify-between items-center px-4">
        {/* --- Title --- */}
        <p className="tracking-widest text-lg xl:text-4xl">SEPHORA</p>

        {/* --- Searchbar (Desktop only)--- */}
        <div className="hidden md:flex md:w-1/2 md:relative">
          <input
            type="text"
            placeholder="FIND YOUR BEAUTY PRODUCTS"
            className="bg-transparent border border-white/40 rounded-full py-2 xl:py-4 px-2 w-full focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors placeholder:text-white"
          />
          {/* --- Search Icon --- */}
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 xl:w-12 h-10 xl:h-12 text-black flex justify-center items-center">
            <IoSearch className="w-5 h-5  text-black/40" />
          </div>
        </div>

        {/* --- Nav Icons --- */}
        <ul className="flex gap-1.5">
          {navIcons.map((navIcon, index) => (
            <li
              className="border border-white/40 rounded-full p-2 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer xl:text-xl"
              key={index}
            >
              <button>{navIcon.icon}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
