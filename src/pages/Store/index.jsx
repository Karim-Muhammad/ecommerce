import Breadcrump from "components/Breadcrump";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Store.scss";
import Rating from "react-rating";
import {
  BsFillGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsFillGridFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
const Store = () => {
  const [filterSort, setFilterSort] = useState(false);

  return (
    <div className={"store"}>
      <div className="breadcrump">
        <Breadcrump
          links={[
            { name: "Home", link: "/" },
            { name: "Store", link: "/store" },
          ]}
        />
      </div>

      <div className="container-xxl">
        <div className="store-content">
          <div className="store-left-side">
            <div className="block block-up">
              <h4>Shop By Category</h4>

              <ul className="categories-list p-0">
                <li>
                  <Link to="/">Category 1</Link>
                </li>
                <li>
                  <Link to="/">Category 2</Link>
                </li>
                <li>
                  <Link to="/">Category 3</Link>
                </li>
                <li>
                  <Link to="/">Category 4</Link>
                </li>
              </ul>
            </div>

            <div className="block block-bottom">
              <h4>Filter By</h4>

              <div className="filter-by-available">
                <h5>Availability</h5>
                <div className="input-group">
                  <input type="checkbox" id="available" />
                  <label htmlFor="available" className="m-2">
                    in stock
                  </label>
                </div>

                <div className="input-group">
                  <input type="checkbox" id="unavailable" />
                  <label htmlFor="unavailable" className="m-2">
                    out of stock
                  </label>
                </div>
              </div>

              <div className="filter-by-price">
                <h5>Price</h5>
                <div className="input-group">
                  <input placeholder="from" type="number" id="from_price" />
                </div>

                <div className="input-group">
                  <input placeholder="to" type="number" id="to_price" />
                </div>
              </div>

              <div className="filter-by-colors">
                <h5>Colors</h5>

                <div className="colors">
                  {[
                    "red",
                    "blue",
                    "green",
                    "yellow",
                    "black",
                    "white",
                    "purple",
                    "gold",
                    "gray",
                    "pink",
                  ].map((color, index) => (
                    <div
                      key={index}
                      className={`circle`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="filter-by-size">
                <h5>Size</h5>
                <div className="input-group">
                  <input type="checkbox" id="size1" />
                  <label htmlFor="size1" className="m-2">
                    S
                  </label>
                </div>
                <div className="input-group">
                  <input type="checkbox" id="size2" />
                  <label htmlFor="size2" className="m-2">
                    M
                  </label>
                </div>
                <div className="input-group">
                  <input type="checkbox" id="size3" />
                  <label htmlFor="size3" className="m-2">
                    L
                  </label>
                </div>
                <div className="input-group">
                  <input type="checkbox" id="size4" />
                  <label htmlFor="size4" className="m-2">
                    XL
                  </label>
                </div>
              </div>
            </div>

            <div className="block block-bottom">
              <h4>Product tag</h4>
              <div className="tags">
                {["new", "sale", "hot", "best seller"].map((tag, index) => (
                  <div
                    key={index}
                    className="tag badge bg-primary rounded-3 mx-1"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="block block-bottom">
              <h4>Random Products</h4>

              <div className="random-products">
                <div className="product">
                  <div className="product-image">
                    <img src="https://via.placeholder.com/150" alt="product" />
                  </div>
                  <div className="product-content">
                    <h5 className="product-title">
                      <Link to="/">Product 1</Link>
                    </h5>
                    <div className="product-rate">
                      <Rating
                        initialRating={3}
                        readonly
                        emptySymbol={<BsStar />}
                        fullSymbol={<BsStarFill color="orange" />}
                      />
                    </div>

                    <div className="product-price">
                      <span>$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="store-right-side">
            <div className="block block-up">
              <div className="left-side">
                Sort By :{" "}
                <select name="sort" id="sort">
                  <option value="newest">Newest</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
              <div className="right-side">
                <h6 className="text-mute">Showing 1-9 of 20 results</h6>
                <div className="view-mode">
                  <ul>
                    <li>
                      <BsFillGridFill />
                    </li>
                    <li>
                      <BsFillGrid3X3GapFill />
                    </li>
                    <li>
                      <BsFillGrid1X2Fill />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile filter, sort */}
              <div className="mb-left-side">
                <button className="btn menu-btn">
                  filter and sort <FaCaretDown />
                </button>
              </div>
            </div>
            <div className="block block-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
