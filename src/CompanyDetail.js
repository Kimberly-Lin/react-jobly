import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

/** Function gives detail of a Company
 *
 * Props: none
 *
 * State: company of null, error of null
 *
 * Routes -> CompanyDetail -> JobList
 */

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [errors, setError] = useState(null);
  console.log("Company Details", { company });

  const { handle } = useParams();

  useEffect(
    function getCompanyHandle() {
      async function fetchCompanyHandle() {
        try {
          const response = await JoblyApi.getCompany(handle);
          setCompany(response);
        } catch (err) {
          setError(err);
        }
      }
      fetchCompanyHandle();
    },
    [handle]
  );

  //   Effect will want to know about when handle changes

  if (errors) return <h2>{errors[0]}</h2>;

  if (!company) return <Loading />;
  console.log(company.jobs, "Company Jobs from API");

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
