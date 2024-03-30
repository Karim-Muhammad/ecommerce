import React from "react";
import Circle from "../Circle";

const Color = ({ color, ...props }) => {
  return <Circle {...props} style={{ backgroundColor: color }} />;
};

export default Color;
