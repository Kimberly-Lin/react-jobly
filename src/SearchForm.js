import React, { useState } from "react";

/** Renders search bar
 * 
 * props: handleSearch
 * state: formData
 * 
 * CompanyList, JobList --> SearchForm
 * 
 */

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState("");
  console.log("SearchForm", { formData });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input type="text" value={formData} placeholder="Enter search term ..." onChange={handleChange}></input>
      <button className="SearchForm-Button"> Search!!! </button>
    </form>
  );
}

export default SearchForm;
