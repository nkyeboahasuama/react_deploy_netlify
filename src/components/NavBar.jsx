import { SearchBar } from "./SearchBar";
import { BiCameraMovie } from "react-icons/bi";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-800 px-8 w-full flex h-10 text-white items-center gap-6 justify-between">
        <div className="flex gap-7 m-5 items-center">
          <h1 className="font-bold">MovieHub</h1>
        </div>
        <div className="p-3 m-5 flex items-center justify-center gap-7 max-w-2xl w-full text-black">
          <SearchBar />
        </div>

        <div className=" flex justify-center items-center w-[10rem] h-full m-5">
          <div className="bg-white text-black w-[1.7rem] h-[1.7rem] rounded-full flex items-center justify-center ">
            <BiCameraMovie />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
