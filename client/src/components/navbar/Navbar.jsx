import SearchBar from "../SearchBar";
import Button from "../Button";
import NavLinks from "../NavLinks";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="bg-slate-900 h-20 w-full flex items-center justify-between py-3 px-4 md:px-10 border-b-2 border-green-gator fixed z-10 opacity-99">
      <img src="src\assets\logo-algogator.svg" alt="" className="w-10 h-10" />

      <NavLinks links={["Collections", " Wallets", "Sales"]}></NavLinks>
      <div className="flex w-1/3 md:w-1/2 lg:w-1/3 justify-around">
        <SearchBar />
        <Button isHidden={false} />
      </div>
      <HiBars3 className="text-green-gator h-10 text-3xl sm:hidden" />
    </div>
  );
}

export default Navbar;
