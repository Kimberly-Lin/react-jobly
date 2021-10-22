/** Renders errors from backend
 *
 * props: errors
 * state: none
 *
 * {JobList, CompanyDetail, CompanyList} -> Errors
 */

function Errors({ errors }) {
  return (
    <div className="Errors">
      {errors.map((err, idx) => (
        <h1 key={idx}>{err}</h1>
      ))}
    </div>
  );
}
export default Errors;
