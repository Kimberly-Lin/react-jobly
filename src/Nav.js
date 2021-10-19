import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

//Docstrings!!!!
function Nav() {
  return (
    <nav className="Nav">
      <NavLink className="Nav-Home" exact to="/">
        Home
      </NavLink>
      <NavLink className="Nav-Companies" exact to="/companies">
        Companies
      </NavLink>
      <NavLink className="Nav-Jobs" exact to="/jobs">
        Jobs
      </NavLink>
    </nav>
  );
}

export default Nav;