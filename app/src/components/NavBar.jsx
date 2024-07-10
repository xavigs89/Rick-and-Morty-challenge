import { Link, NavLink } from "react-router-dom";
import { mainButton } from "../styles";


function NavBar() {
  return (
    <nav className="w-full bg-light mb-4 relative">
      <div className="flex justify-between items-center w-full px-4 mt-6">
        <Link to="/" className={`${mainButton} ml-24`}>
          Home
        </Link>
        <h1 className="text-3xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
        Welcome to Rick and Morty App
      </h1>
        <div className="flex space-x-4">
          <NavLink to="/" className={mainButton}>
            Characters
          </NavLink>
          <NavLink to="/episodes" className={mainButton}>
            Episodes
          </NavLink>
          <NavLink to="/location" className={mainButton}>
          Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
