import React from "react";
import { Link } from "react-router-dom";

const Column = ({ title, links }) => {
  return (
    <>
      <h3 className="text-white">{title}</h3>
      <ul className="list-unstyled">
        {links.map((link) => (
          <li>
            <Link
              to={link.toLowerCase().split(" ").join("-")}
              key={link}
              className="mt-1 text-white d-block"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Column;
