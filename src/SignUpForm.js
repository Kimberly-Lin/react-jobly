import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "./UserContext";
import "./SignupForm.css"

/** Renders signUpForm
 *
 * props: signUpUser fn
 * state: formData
 *
 * Routes -> SignUpForm
 *
 */

const INITIAL_STATE = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

function SignUpForm({ signUpUser }) {
  const { currUser } = useContext(UserContext);
  const [formData, setFormData] = useState(INITIAL_STATE);
  console.log("SignUpForm", { formData });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value.trim() }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signUpUser(formData);
  }

  if (currUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="SignUpForm">
      <form className="SignUpForm-Form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <button className="TextForm-Button"> Sign Up! </button>
      </form>
    </div>
  );
}

export default SignUpForm;
