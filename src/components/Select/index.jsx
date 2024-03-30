import React, { useState } from "react";
import { LuArrowDown } from "react-icons/lu";

import "./Select.scss";
const Select = (props) => {
  const [value, setValue] = useState("0");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const hasValue = value !== "0";

  return (
    <div
      className={`cool-select ${hasValue ? "active" : ""} ${props.className}`}
    >
      <div className="title-select h4">{props.title}</div>
      <select name="select" id="select" onChange={handleChange}>
        <option value="0">Select</option>
        <option value="United States">United States</option>
        <option value="Egypt">Egypt</option>
        <option value="Lebnon">Lebnon</option>
      </select>
      <div className="value-select">{hasValue && <span>{value}</span>}</div>
      <div className="icon-select">
        <LuArrowDown />
      </div>
    </div>
  );
};

export default Select;
