import React from "react";
import { Link } from "react-router-dom";

const SBanner = ({
  image,
  big_title,
  small_title,
  description,
  link,
  className,
}) => {
  return (
    <div className={`banner small-banner position-relative p-0 ${className}`}>
      <img
        className="img-fluid d-block w-100 rounded-3"
        src={image}
        alt={small_title}
      />

      <div className="banner-text position-absolute">
        <h5 className="text-lg mb-3">{big_title}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SBanner;
