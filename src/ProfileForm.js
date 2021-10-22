import React, { useContext, useState } from "react";
import Errors from "./Errors";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";
import "./ProfileForm.css"

/** Renders edit profile form
 * 
 * props: updateUser fn
 * state: formData
 * 
 * Routes -> ProfileForm
 * 
 */

function ProfileForm({ editUser }) {
  const { currUser } = useContext(UserContext);

  const initialState = { ...currUser, "password": "" };

  const [formData, setFormData] = useState(initialState);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(null);
  console.log("ProfileForm", { formData });

  //TODO: Error needs to clear 

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value.trim() }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const { username, password } = formData
      //TODO: GET THIS OUTTA HERE!!
      await JoblyApi.login({ username, password });
      await editUser(formData);
      setIsSuccessful(true);
      setFormData({ ...formData, "password": "" });
    } catch (err) {
      console.log("error", { err });
      setError(err);
      setIsSuccessful(false);
    }
  }

  return (
    <div className="ProfileForm">
      {error && <Errors errors={error} />}
      {isSuccessful && <h1>Updated profile successfully</h1>}
      <form className="ProfileForm-Form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            disabled
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
        <button className="ProfileForm-Button"> Update! </button>
      </form>
    </div>
  );
}

export default ProfileForm;
