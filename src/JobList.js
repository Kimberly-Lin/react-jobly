import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import Loading from "./Loading";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("JobCardList", { jobs, searchTerm });

  function handleSearch(search) {
    setSearchTerm({ title: search });
    setIsLoading(true);
  }

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
    return <Loading />
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {jobs.length > 0
        ? <JobCardList jobs={jobs} />
        : <p>Sorry, no matching companies were found. 🥲 </p>}
    </div>
  );
}

export default JobList;