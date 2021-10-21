import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import UserContext from "./UserContext";

/** Renders Nav
 *
 * State: none
 * Props: none
 *
 * App -> Nav
 */

//TODO: REMEMBER to add EditProfileForm

function Nav({ logOut }) {
  const { currUsername } = useContext(UserContext);
  return (
    <nav className="Nav">
      <NavLink className="Nav-Home" exact to="/">
        Home
      </NavLink>
      {currUsername !== null ? (
        <div>
          <NavLink className="Nav-Companies" exact to="/companies">
            Companies
          </NavLink>
          <NavLink className="Nav-Jobs" exact to="/jobs">
            Jobs
          </NavLink>
          <button onClick={logOut}>LogOut</button>
        </div>
      ) : (
        <div>
          <NavLink className="Nav-Jobs" exact to="/jobs">
            Signup
          </NavLink>
          <NavLink className="Nav-Jobs" exact to="/jobs">
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
