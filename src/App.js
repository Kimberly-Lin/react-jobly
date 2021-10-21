import "./App.css";
import { useState } from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi";
import Errors from "./Errors";

/** Renders jobly app
 *
 * prop: none
 * state: none
 *
 * Index -> App -> {Routes, Nav}
 */
function App() {
  const [currUsername, setCurrUsername] = useState(null);
  const [token, setToken] = useState(null);

  async function signUpUser(formData) {
    try {
      let token = await JoblyApi.signUp(formData);
      console.log("token from signUpUser has passed", { token });
      setToken(token);
    } catch (err) {
      return <Errors errors={err} />;
    }
  }

  async function loginUser(formData) {
    try {
      let token = await JoblyApi.login(formData);
      console.log("token from loginUser has passed", { token });
      setToken(token);
    } catch (err) {
      return <Errors errors={err} />;
    }
  }

  function logOut() {
    console.log("The logout was clicked");
    setCurrUsername(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currUsername }}>
          <Nav logOut={logOut} />
          <Routes signUpUser={signUpUser} loginUser={loginUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
