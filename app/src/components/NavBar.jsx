import { Link, NavLink } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <h1 className="text-primary text-white">Rick & Morty App</h1>
        </Link>

        <div className="navbar-nav fs-5 text-white">
          <NavLink to="/" className="nav-link">
            Characters
          </NavLink>
          <NavLink to="/episodes" className="nav-link">
            Episodes
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
