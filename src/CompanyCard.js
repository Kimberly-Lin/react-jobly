import React from "react";

function CompanyCard({ name, description, logoUrl }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {logoUrl && <img src={logoUrl} alt="logo" />}
    </div>
  );
}

export default CompanyCard;
