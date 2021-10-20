import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import Loading from "./Loading";

/** Function renders List of companies
 *
 * State:
 * searchTerm: {name: company}
 * companies: [{company}, {company}, {company}]
 *
 * Props: None
 *
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("CompanyList", { companies, searchTerm });

  function handleSearch(search) {
    setSearchTerm({ name: search });
    setIsLoading(true);
  }

  useEffect(
    function getCompanies() {
      async function fetchCompanies() {
        const response = await JoblyApi.getCompanies(searchTerm);
        setCompanies(response);
      }
      fetchCompanies();
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
      {companies.length > 0
        ? companies.map(({ handle, name, description, logoUrl }) => (
          <CompanyCard
            key={handle}
            name={name}
            description={description}
            logoUrl={logoUrl}
          />))
        : <p>Sorry, no matching companies were found. 🥲 </p>}
    </div>
  );
}

export default CompanyList;
