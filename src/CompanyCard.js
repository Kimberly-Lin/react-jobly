import { Link } from "react-router-dom";
import "./CompanyCard.css"

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
    <div className="CompanyCard">
      <Link
        to={`companies/${handle}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2>{name}</h2>
        <p>{description}</p>
        {logoUrl && <img src={logoUrl} alt="logo" />}
      </Link>
    </div>
  );
}

export default CompanyCard;
