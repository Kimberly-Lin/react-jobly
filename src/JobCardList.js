import React from "react";
import JobCard from "./JobCard";

/** Renders a list of job cards
 *
 * prop: jobs
 * state: N/A
 *
 * JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  console.log(jobs, "JobCardList Component List");
  return (
    <div>
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
