import React from "react";
import {
  BsArrowDownUp,
  BsCart,
  BsEye,
  BsFillSuitHeartFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import "./ProductCard.scss";

const Product1 = ({ product, className }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price - product.price * (product.discount / 100));
  return (
    <div className={`product-card ${className || ""}`}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <strong className="product-category">{product.category}</strong>
        <h3 className="product-title">
          <Link to="/product/1">{product.name}</Link>
        </h3>
        <p className="product-price text-muted">{price}</p>
        <div className="product-rate">
          <Rating
            start={1}
            stop={6}
            initialRating={product.rate}
            emptySymbol={<BsStar />}
            fullSymbol={<BsStarFill color="orange" />}
          />
        </div>
        <p className="product-discount">{product.discount}</p>
      </div>

      <div className="product-options">
        <div className="product-add-cart">
          <Link to="/cart">
            <BsCart />
          </Link>
        </div>
        <div className="product-compare">
          <Link to="/compare-products">
            <BsArrowDownUp />
          </Link>
        </div>
        <div className="product wishlist">
          <Link to="/wishlist">
            <BsFillSuitHeartFill />
          </Link>
        </div>
        <div className="product-preview">
          <Link to="/product/1">
            <BsEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product1;
