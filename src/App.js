import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Home } from "pages";
import Layout from "layouts/Layout";

// CSS
import "./App.scss";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
