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
  const { currUser } = useContext(UserContext);
  return (
    <nav className="Nav">
      <NavLink className="Nav-Home" exact to="/">
        Home
      </NavLink>
      {currUser !== null ? (
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
          <NavLink className="Nav-Jobs" exact to="/signup">
            Signup
          </NavLink>
          <NavLink className="Nav-Jobs" exact to="/login">
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
