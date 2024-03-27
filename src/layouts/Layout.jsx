import React from "react";
import { Outlet } from "react-router-dom";

// Partials
import { Header, Footer } from "components/shared";

import "./Layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="my-5 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
