import React from "react";

import "./SpecialCard.scss";
const SpecialCard = (props) => {
  return (
    <div className="special-card">
      <div className="card-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-content">
        <h5 className="card-category">{props.category}</h5>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default SpecialCard;
