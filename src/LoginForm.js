import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "./UserContext";
import "./LoginForm.css"

/** Renders Login form
 *
 * props: loginUser
 * state: formData
 *
 * Routes -> LoginForm
 *
 */
const INITIAL_STATE = { username: "", password: "" };

function LoginForm({ loginUser }) {
  const { currUser } = useContext(UserContext);
  const [formData, setFormData] = useState(INITIAL_STATE);
  console.log("LoginForm", { formData });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value.trim() }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await loginUser(formData);
  }

  if (currUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="LoginForm">
      <form className="LoginForm-Form" onSubmit={handleSubmit}>
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
        <button className="TextForm-Button"> Log In! </button>
      </form>
    </div>
  );
}

export default LoginForm;