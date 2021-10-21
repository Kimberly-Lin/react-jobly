import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "./UserContext";

/** Renders signUpForm
 * 
 * props: signUpUser
 * state: formData
 * 
 * Routes -> SignUpPage
 * 
 */

const INITIAL_STATE = { username: "", password: "", firstName: "", lastName: "", email: "" }

function SignUpPage({ signUpUser }) {
  const { currUsername } = useContext(UserContext);
  const [formData, setFormData] = useState(INITIAL_STATE);
  console.log("SignUpPage", { formData });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signUpUser(formData);
  }

  if (currUsername) {
    return <Redirect to="/" />
  }

  return (
    <form className="SignUpForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" value={formData.username} onChange={handleChange}></input>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" value={formData.password} onChange={handleChange}></input>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange}></input>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange}></input>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="text" value={formData.email} onChange={handleChange}></input>
      <button className="TextForm-Button"> Sign Up! </button>
    </form >
  );
}

export default SignUpPage;
