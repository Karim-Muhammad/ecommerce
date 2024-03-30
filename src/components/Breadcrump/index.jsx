import React from "react";
import { Link } from "react-router-dom";

import classes from "./Breadcrump.module.scss";
const Breadcrump = ({ links }) => {
  return (
    <div>
      <nav className={classes.breadcrump} aria-label="breadcrumb">
        <ul className="">
          {links.map((link, index) => (
            <li className={`${link.active ? classes.active : ""}`} key={index}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrump;
