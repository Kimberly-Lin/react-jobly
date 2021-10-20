import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import Errors from "./Errors";

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
  const [errors, setErrors] = useState(null);
  console.log("Company Details", { company, errors });

  const { handle } = useParams();

  useEffect(
    function getCompanyHandle() {
      async function fetchCompanyHandle() {
        try {
          const response = await JoblyApi.getCompany(handle);
          setCompany(response);
        } catch (err) {
          setErrors(err);
        }
      }
      fetchCompanyHandle();
    },
    [handle]
  );

  //   Effect will want to know about when handle changes

  if (errors) return <Errors errors={errors} />;

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
