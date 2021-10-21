import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "./UserContext";

/** Renders Login form
 * 
 * props: loginUser
 * state: formData
 * 
 * Routes -> LoginPage
 * 
 */
const INITIAL_STATE = { username: "", password: "" }


function LoginPage({ loginUser }) {
  const { currUsername } = useContext(UserContext);
  const [formData, setFormData] = useState(INITIAL_STATE);
  console.log("LoginPage", { formData });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(formData);
  }

  if (currUsername) {
    return <Redirect to="/" />
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" value={formData.username} onChange={handleChange}></input>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" value={formData.password} onChange={handleChange}></input>
      <button className="TextForm-Button"> Log In! </button>
    </form >
  );
}

export default LoginPage;
