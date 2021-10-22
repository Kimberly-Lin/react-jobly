import "./App.css";
import { useState, useEffect } from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi";
import jwt from "jsonwebtoken";

/** Renders jobly app
 *
 * prop: none
 * state: currUser, token, needsReloading
 *
 * Index -> App -> {Routes, Nav}
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [needsReloading, setNeedsReloading] = useState(false);

  console.log("App", { currUser, token, needsReloading });

  useEffect(
    function getCurrUser() {
      async function fetchCurrUser() {
        JoblyApi.token = token;
        const { username } = jwt.decode(token);
        console.log(username, "This is current username");
        const user = await JoblyApi.getUser(username);
        console.log({ user }, "User info from fetchCurrUser");
        setCurrUser(user);
        setNeedsReloading(true);
      }
      if (token) {
        fetchCurrUser();
      } else {
        setNeedsReloading(true);
      }
    },
    [token]
  );

  async function signUpUser(formData) {
    const token = await JoblyApi.signUp(formData);
    console.log("token from signUpUser has passed", { token });
    localStorage.setItem("token", token);
    setToken(token);
  }

  async function loginUser(formData) {
    const token = await JoblyApi.login(formData);
    console.log("token from loginUser has passed", { token });
    localStorage.setItem("token", token);
    setToken(token);
  }

  async function editUser(formData) {
    console.log("edit user ran", { formData });
    const { username, password, firstName, lastName, email } = formData;
    // await JoblyApi.login({ username, password });

    let token = await JoblyApi.login({ username, password });
    if (token) {
      const user = await JoblyApi.editUser({
        username,
        password,
        firstName,
        lastName,
        email,
      });
      setCurrUser(user);
    }
  }

  function logOut() {
    console.log("The logout was clicked");
    setCurrUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }

  return (
    (needsReloading &&
      <div className="App">
        <BrowserRouter>
          <UserContext.Provider value={{ currUser }}>
            <Nav logOut={logOut} />
            <Routes
              signUpUser={signUpUser}
              loginUser={loginUser}
              currUser={currUser}
              editUser={editUser}
            />
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
