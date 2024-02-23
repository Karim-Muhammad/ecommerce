import React from 'react';
import { Outlet } from 'react-router-dom';

// Partials
import {Header, Footer} from 'components/shared';

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout