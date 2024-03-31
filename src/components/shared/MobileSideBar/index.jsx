import React from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import { BsDash } from "react-icons/bs";

// CSS
import "./MobileSideBar.scss";
const MobileSideBar = ({ toggleSidebar, showSidebar, ...props }) => {
  return (
    <nav className={`${showSidebar} sidebar`}>
      <div className="close">
        <div className="close-btn" onClick={toggleSidebar}>
          <BsDash />
        </div>
      </div>
      {/* Sidebar Header */}
      <div className="sidebar-head">
        <img src="images/stori.png" alt="logo" />
      </div>

      {/* Sidebar Body */}
      <div className="sidebar-body">
        {/* Middle Header */}
        <header className="header-middle row m-0 py-3 align-items-center">
          {/* LOGO */}
          <div className="logo-name">
            <Link to={"/"} className="text-primary">
              Stori
            </Link>
          </div>
          {/* Options */}
          <div className="header-links col-12 col-sm-4 d-flex flex-wrap align-items-center justify-content-between">
            {[
              {
                name: "Compare",
                link: "/compare-products",
                icon: "compare.svg",
              },
              { name: "Wishlist", link: "/wishlist", icon: "wishlist.svg" },
              { name: "Login", link: "/login", icon: "user.svg" },
              { name: "Cart", link: "/cart", icon: "cart.svg" },
            ].map((e, index) => (
              <div className="icon">
                <Link
                  key={index}
                  to={e.link}
                  className="d-flex align-items-center gap-2"
                  onClick={toggleSidebar}
                >
                  <img src={`images/${e.icon}`} alt="icon-compare" />
                  <p className="mb-0">{e.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </header>
        {/* Bottom Header */}
        <header className="header-bottom d-block py-3">
          <div className="header-bottom-links d-flex gap-3 align-items-center">
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
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Another Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Other Action
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header-links d-flex gap-3">
              {[
                { name: "Home", link: "/" },
                { name: "Store", link: "/store" },
                { name: "Blog", link: "/blogs" },
                { name: "Contact", link: "/contact" },
              ].map((e, index) => (
                <Link
                  to={e.link}
                  className={`header-bottom__link`}
                  onClick={toggleSidebar}
                >
                  {e.name}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* <div className={`${!openMenu && "d-none"} features`}></div>
      <div className={`${!openMenu && "d-none"} categories`}></div> */}
      </div>

      {/* Sidebar Bottom */}
      <div className="sidebar-foot"></div>
    </nav>
  );
};

export default MobileSideBar;
