import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  BsBalloonHeart,
  BsDash,
  BsFileMinus,
  BsPlus,
  BsPlusCircle,
  BsSearch,
} from "react-icons/bs";

// CSS
import "./Header.scss";
const Header = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  let showSidebar = openCategories || openFeatures ? "show" : "";

  const toggleSidebar = (dispatch) => {
    showSidebar = !showSidebar;
    dispatch(true);
  };

  const closeSidebar = () => {
    setOpenFeatures(false);
    setOpenCategories(false);
  };

  return (
    <div className="header py-3">
      <div className="container-xxl text-white">
        {/* Top Header */}
        <header className="header-top row m-0">
          {/* left text */}
          <div className="col-12 col-sm-8">
            <p className="mb-0">free shipping over 100$ & free returns</p>
          </div>
          {/* right text */}
          <div className="col-12 col-sm-4">
            <div className="text-end">
              <p className="mb-0">Hotline: +123 456 789</p>
            </div>
          </div>
        </header>

        <div className="header-options">
          {/* Middle Header */}
          <header className="header-middle row m-0 py-3 align-items-center">
            {/* LOGO */}
            <div className="logo-name col-12 mb-3 mb-sm-0 col-sm-2">
              <Link to={"/"} className="text-white">
                Stori
              </Link>
            </div>
            {/* end */}
            {/* SEARCH */}
            <div className="header-search col-12 mb-5 mb-sm-0 col-sm-6">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here..."
                  aria-label="Search Here..."
                  aria-describedby="basic-addon2"
                />
                <span
                  class="input-group-text header-search-icon"
                  id="basic-addon2"
                >
                  <BsSearch />
                </span>
              </div>
            </div>
            {/* end */}
            {/* Options */}
            <div className="d-none header-links col-12 col-sm-4 d-flex align-items-center justify-content-between">
              <div className="icon">
                <Link
                  to={"/compare"}
                  className="d-flex align-items-center gap-2"
                >
                  <img src="images/compare.svg" alt="icon-compare" />
                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </Link>
              </div>

              <div className="icon">
                <Link
                  to={"/favourites"}
                  className="d-flex align-items-center gap-2"
                >
                  <img src="images/wishlist.svg" alt="icon-wishlist" />
                  <p className="mb-0">
                    Favourite <br /> Wishlist
                  </p>
                </Link>
              </div>

              <div className="icon">
                <Link to={"/login"} className="d-flex align-items-center gap-2">
                  <img src="images/user.svg" alt="icon-user" />
                  <p className="mb-0">
                    Login <br /> Account
                  </p>
                </Link>
              </div>

              <div className="icon">
                <Link to={"/cart"} className="d-flex align-items-center gap-2">
                  <img src="images/cart.svg" alt="icon-cart" />
                  <div className="header-middle__cart-label">
                    <span className="badge bg-white text-dark d-block">0</span>
                    <p className="mb-0">$ 500</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* end */}
          </header>
          {/* Bottom Header */}
          <header className="d-none header-bottom py-3">
            <div className="d-flex gap-3 align-items-center">
              <div class="dropdown header-dropdown border border-white py-1 px-2 rounded-2">
                <button
                  class="header-menu btn btn-secondary dropdown-toggle bg-transparent border-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center gap-3 header-links">
                <NavLink to="/" className={`header-bottom__link`}>
                  Home
                </NavLink>
                <NavLink to="/store" className={`header-bottom__link`}>
                  Our Store
                </NavLink>
                <NavLink to="/blogs" className={`header-bottom__link`}>
                  Blog
                </NavLink>
                <NavLink to="/contact" className={`header-bottom__link`}>
                  Contact
                </NavLink>
              </div>
            </div>
          </header>
        </div>
        {/* ./header-options */}

        {/* Mobile Menu */}
        <div className="row m-0 gap-1 open-with">
          <div
            className="col open-featrues"
            onClick={() => toggleSidebar(setOpenFeatures)}
          >
            <BsPlusCircle /> Open Features
          </div>

          <div
            className="col open-categories"
            onClick={() => toggleSidebar(setOpenCategories)}
          >
            <BsPlusCircle /> Open Categories
          </div>
        </div>

        <nav className={`${showSidebar} sidebar`}>
          <div className="close">
            <div className="close-btn" onClick={() => closeSidebar()}>
              <BsDash />
            </div>
          </div>
          {/* Sidebar Header */}
          <div className="sidebar-head">
            <img src="images/stori.png" alt="logo" />
          </div>

          {/* Sidebar Body */}
          <div className="sidebar-body">
            <div className={`${!openFeatures && "d-none"} features`}>
              <h3 className="text-primary">Features</h3>
              <div className="row">
                <div className="icon">
                  <Link
                    to={"/compare"}
                    className="d-flex align-items-center gap-2"
                  >
                    <img src="images/compare.svg" alt="icon-compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="icon">
                  <Link
                    to={"/store"}
                    className="d-flex align-items-center gap-2"
                  >
                    <img src="images/wishlist.svg" alt="icon-wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="icon">
                  <Link
                    to={"/login"}
                    className="d-flex align-items-center gap-2"
                  >
                    <img src="images/user.svg" alt="icon-user" />
                    <p className="mb-0">
                      Login <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="icon">
                  <Link
                    to={"/cart"}
                    className="d-flex align-items-center gap-2"
                  >
                    <img src="images/cart.svg" alt="icon-cart" />
                    <div className="header-middle__cart-label">
                      <span className="badge bg-white text-dark d-block">
                        0
                      </span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${!openCategories && "d-none"} categories`}>
              <div className="gap-7 align-items-center">
                <div class="dropdown header-bottom__dropdown border border-white py-1 px-2 mb-3 rounded-2">
                  <button
                    class="text-white header-menu btn btn-secondary dropdown-toggle bg-transparent border-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-column  align-items-center gap-3 header-links">
                  <NavLink to="/" className={`header-bottom__link`}>
                    Home
                  </NavLink>
                  <NavLink to="/" className={`header-bottom__link`}>
                    Our Store
                  </NavLink>
                  <NavLink to="/" className={`header-bottom__link`}>
                    Blog
                  </NavLink>
                  <NavLink to="/" className={`header-bottom__link`}>
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Bottom */}
          <div className="sidebar-foot"></div>
        </nav>
        {/* <NavSidebar /> */}
      </div>
    </div>
  );
};

export default Header;
