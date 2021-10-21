import React, { useState } from "react";

/** Renders text forms
 * 
 * props: fields,handleUser
 * state: formData
 * 
 * {SignUpPage, LoginPage} --> TextForm
 * 
 */

const SIGN_UP_FIELDS = ["username", "password", "firstName", "lastName", "email"];
const LOGIN_FIELDS = ["username", "password"];

function TextForm({ formType, handleUser }) {
  const [formData, setFormData] = useState("");
  console.log("TextForm", { formData });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUser(formData);
  }

  let fields;
  if (formType === "signUp") {
    fields = SIGN_UP_FIELDS;
  } else if (formType === "login") {
    fields = LOGIN_FIELDS;
  }

  return (
    <form className="TextForm" onSubmit={handleSubmit}>
      {fields.map((field, idx) =>
        <div key={idx}>
          <label htmlFor={field}>{`${field[0].toUpperCase() + field.slice(1)}`}</label>
          <input id={field} name={field} type="text" value={formData} onChange={handleChange}></input>
        </div>
      )}
      {formType === "signUp"
        ? <button className="TextForm-Button"> Sign Up! </button>
        : <button className="TextForm-Button"> Log In! </button>
      }
    </form >
  );
}

export default TextForm;
