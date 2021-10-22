import React from "react";
import JobCard from "./JobCard";
import "./JobCardList.css"

/** Renders a list of job cards
 *
 * prop: jobs
 * state: N/A
 *
 * JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  console.log("JobCardList", { jobs });
  return (
    <div className="JobCardList">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.companyName}
          salary={job.salary}
          equity={job.equity}
        />
      ))}
    </div>
  );
}

export default JobCardList;
