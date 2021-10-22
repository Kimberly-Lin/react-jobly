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
 * state: none
 *
 * Index -> App -> {Routes, Nav}
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  console.log("App", { currUser, token });

  useEffect(
    function getCurrUser() {
      async function fetchCurrUser() {
        if (token) {
          JoblyApi.token = token;
          const { username } = jwt.decode(token);
          console.log(username, "This is current username");
          const user = await JoblyApi.getUser({ username });
          console.log({ user }, "User info from fetchCurrUser");
          setCurrUser(user);
          localStorage.setItem("token", token);
        }
      }
      fetchCurrUser();
    },
    [token]
  );

  async function signUpUser(formData) {
    let token = await JoblyApi.signUp(formData);
    console.log("token from signUpUser has passed", { token });
    setToken(token);
  }

  async function loginUser(formData) {
    let token = await JoblyApi.login(formData);
    console.log("token from loginUser has passed", { token });
    setToken(token);
  }

  function logOut() {
    console.log("The logout was clicked");
    setCurrUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currUser }}>
          <Nav logOut={logOut} />
          <Routes
            signUpUser={signUpUser}
            loginUser={loginUser}
            currUser={currUser}
          />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
