import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import Loading from "./Loading";
import Errors from "./Errors";

/** Function renders List of companies
 *
 * State:
 * searchTerm: {name: company}
 * companies: [{company}, {company}, {company}]
 * isLoading: boolean
 *
 * Props: None
 *
 * Routes -> CompanyList -> {SearchForm, CompanyCard}
 *
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("CompanyList", { companies, searchTerm, isLoading });

  function handleSearch(searchTerm) {
    setIsLoading(true);
    setSearchTerm(searchTerm);
  }

  useEffect(
    function getCompanies() {
      console.log("CompanyList effect ran", { searchTerm })
      async function fetchCompanies() {
        try {
          const response = await JoblyApi.getCompanies(searchTerm);
          setCompanies(response);
        } catch (err) {
          console.log(err);
          return <Errors errors={err} />
        }
      }
      fetchCompanies();
      setIsLoading(false);
      setSearchTerm(null);
    },
    [searchTerm]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {isLoading
        ? <Loading />
        : companies.length === 0 && searchTerm
          ? <p>Sorry, no matching companies were found. 🥲 </p>
          : companies.map(({ handle, name, description, logoUrl }) => (
            <CompanyCard
              key={handle}
              handle={handle}
              name={name}
              description={description}
              logoUrl={logoUrl}
            />
          ))
      }
    </div>
  );
}

export default CompanyList;
