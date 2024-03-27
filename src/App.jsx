import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Home,
  Blogs,
  CompareProducts,
  Store,
  Wishlist,
  Login,
  ResetPassword,
  Register,
} from "pages";
import Layout from "layouts/Layout";

// CSS
import "./App.scss";
import Blog from "pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-products" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ResetPassword />} />
            <Route path="register" element={<Register />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
