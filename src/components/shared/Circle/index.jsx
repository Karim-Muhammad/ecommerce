import React from "react";

const Circle = ({ className, ...props }) => {
  return (
    <div {...props} className={`circle ${className ?? ""}`}>
      {props.children}
    </div>
  );
};

export default Circle;
