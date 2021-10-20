import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import Loading from "./Loading";

/** Renders JobList
 *
 * State:
 *   jobs - []
 *   searchTerm - null
 *   isLoading - true
 *
 * Props: none
 *
 * Routes -> JobList -> {SearchTerm, JobCardList}
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("JobCardList", { jobs, searchTerm });

  function handleSearch(search) {
    setSearchTerm({ title: search });
    setIsLoading(true);
  }

  // try catch in async fetchJobs incase it goes down

  // Have the search term BE a string, make this more understandable
  // Move the knowledge of the Object INNN the API, less to worry about.

  useEffect(
    function getJobs() {
      async function fetchJobs() {
        const response = await JoblyApi.getJobs(searchTerm);
        setJobs(response);
      }
      fetchJobs();
      setIsLoading(false);
    },
    [searchTerm]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {jobs.length === 0 && searchTerm ? (
        <p>Sorry, no matching jobs were found. 🥲 </p>
      ) : (
        <JobCardList jobs={jobs} />
      )}
    </div>
  );
}

export default JobList;
