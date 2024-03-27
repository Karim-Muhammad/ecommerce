import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};

export default Meta;
