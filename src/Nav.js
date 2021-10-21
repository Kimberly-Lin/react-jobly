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
          <NavLink className="Nav-Profile" exact to="/profile">
            Profile
          </NavLink>
          <NavLink className="Nav-Logout" exact to="/" onClick={logOut}>
            Log out {currUser.username}
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="Nav-Signup" exact to="/signup">
            Signup
          </NavLink>
          <NavLink className="Nav-Login" exact to="/login">
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
