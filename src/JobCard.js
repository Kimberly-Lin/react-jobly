import React from "react";

/** Renders job cards
 * 
 * props: title, company, salary, equity
 * state: N/A
 * 
 * JobCardList -> JobCard
 */
function JobCard({ title, company, salary, equity }) {
  return (
    <div>
      <h2><b>{title}</b></h2>
      <h3>{company}</h3>
      {salary && <div> salary: {salary.toLocaleString()} </div>}
      {equity && <div> equity: {equity} </div>}
    </div>
  );
}

export default JobCard;