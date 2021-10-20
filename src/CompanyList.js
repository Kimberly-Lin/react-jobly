import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import axios from "axios";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

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
  console.log("CompanyList", { companies, searchTerm });

  function handleSearch(search) {
    setSearchTerm(search);
  }

  useEffect(
    function getCompanies() {
      async function fetchCompanies() {
        const response = await JoblyApi.getCompanies(searchTerm);
        console.log("response of Fetching", response);
        setCompanies(response);
      }

      fetchCompanies();
    },
    [searchTerm]
  );

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {companies.map(({ handle, name, description, logoUrl }) => (
        <CompanyCard
          key={handle}
          name={name}
          description={description}
          logoUrl={logoUrl}
        />
      ))}
    </div>
  );
}

export default CompanyList;
