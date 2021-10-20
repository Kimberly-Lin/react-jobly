import { Link } from "react-router-dom";

/** Renders CompanyCard
 *
 * Props: handle, name, description, logoUrl
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <Link
      to={`companies/${handle}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        {logoUrl && <img src={logoUrl} alt="logo" />}
      </div>
    </Link>
  );
}

export default CompanyCard;
