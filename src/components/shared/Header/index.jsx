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
import { LuMenu } from "react-icons/lu";

// Modals
import ModelSidebar from "components/Modals/Sidebar";

// CSS
import "./Header.scss";

import MobileSideBar from "../MobileSideBar";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  let showSidebar = openMenu ? "show" : "";

  console.log("showSidebar", showSidebar);
  const toggleSidebar = () => {
    setOpenMenu((prev) => !prev);
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
            <div className="logo-name col-lg-2 d-flex d-sm-block justify-content-between mb-3">
              <Link to={"/"} className="text-white">
                Stori
              </Link>

              <div
                className="menu-toggle btn btn-dark text-white d-sm-none"
                onClick={toggleSidebar}
              >
                <LuMenu className="" />
              </div>
            </div>
            {/* SEARCH */}
            <div className="header-search col-md-4 flex-grow-1 mb-sm-0">
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
            {/* Options */}
            <div className="d-none header-links col-md-4 flex-grow-1 d-sm-flex flex-wrap align-items-center justify-content-between">
              <div className="icon">
                <Link
                  to={"/compare-products"}
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
                  to={"/wishlist"}
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
          </header>
          {/* Bottom Header */}
          <header className="d-none header-bottom d-sm-block">
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

        {/* Mobile Sidebar */}
        <ModelSidebar
          showSidebar={showSidebar}
          Component={MobileSideBar}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default Header;
