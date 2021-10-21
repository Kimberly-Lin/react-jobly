import "./App.css";
import { useState, useEffect } from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi";
import Errors from "./Errors";
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
  const [token, setToken] = useState(null);
  //can set default token to localstorage

  console.log("App", { currUser, token });

  // Use effect to getCurrUsername
  // if there is a token
  // reassign Joblytoke to token
  // decode with jwt, to get username from token
  // destructure to get username
  // make a variable to make a get request from api

  useEffect(
    function getCurrUser() {
      //TODO: settoken in localstorage
      async function fetchCurrUser() {
        if (token) {
          JoblyApi.token = token;
          const { username } = jwt.decode(token);
          console.log(username, "This is current username");
          const user = await JoblyApi.getUser({ username });
          console.log({ user }, "User info from fetchCurrUser");
          setCurrUser(user);
        }
      }
      fetchCurrUser();
    },
    [token]
    //QUESTION: How to use effect to change state if we don't have token as a state?
  );

  //TODO: can remove try catch and catch the error in the form
  async function signUpUser(formData) {
    try {
      let token = await JoblyApi.signUp(formData);
      console.log("token from signUpUser has passed", { token });
      setToken(token);
      //TODO:add token to localstorage
    } catch (err) {
      return <Errors errors={err} />;
    }
  }

  async function loginUser(formData) {
    try {
      let token = await JoblyApi.login(formData);
      console.log("token from loginUser has passed", { token });
      setToken(token);
      //TODO:add token to localstorage
    } catch (err) {
      console.log("Login caught error", { err });
      return <Errors errors={err} />;
    }
  }

  function logOut() {
    console.log("The logout was clicked");
    setCurrUser(null);
    setToken(null);
    //TODO: remove token from localstorage
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currUser }}>
          <Nav logOut={logOut} />
          <Routes signUpUser={signUpUser} loginUser={loginUser} currUser={currUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
