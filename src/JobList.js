import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import Loading from "./Loading";
import Errors from "./Errors";

/** Renders JobList
 *
 * State:
 *   jobs - []
 *   searchTerm - null
 *   isLoading - true
 *
 * Props: none
 *
 * Routes -> JobList -> {SearchTerm, JobCardList, Errors}
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("JobCardList", { jobs, searchTerm });

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    setIsLoading(true);
  }

  useEffect(
    function getJobs() {
      async function fetchJobs() {
        try {
          const response = await JoblyApi.getJobs(searchTerm);
          setJobs(response);
        } catch (err) {
          return <Errors errors={err} />
        }
      }
      fetchJobs();
      setIsLoading(false);
      setSearchTerm(null);
    },
    [searchTerm]
  );

  return (
    <div className="JobList">
      <SearchForm handleSearch={handleSearch} />
      {isLoading
        ? <Loading />
        : jobs.length === 0 && searchTerm ? (
          <p>Sorry, no matching jobs were found. 🥲 </p>
        ) : (
          <JobCardList jobs={jobs} />
        )
      }
    </div>
  );
}

export default JobList;
