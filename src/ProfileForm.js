import React, { useState } from "react";

//TODO: update docstring
/** Renders search bar
 * 
 * props: handleSearch fn
 * state: formData
 * 
 * CompanyList, JobList --> SearchForm
 * 
 */

function ProfileForm({ updateUser }) {
  const [formData, setFormData] = useState("");
  console.log("ProfileForm", { formData });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updateUser(formData);
  }

  //TODO: change this
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input type="text" value={formData} placeholder="Enter search term ..." onChange={handleChange}></input>
      <button className="SearchForm-Button"> Search!!! </button>
    </form>
  );
}

export default ProfileForm;
