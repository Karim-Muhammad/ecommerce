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
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="product-content">
        <strong className="product-category">{props.category}</strong>
        <h3 className="product-title">{props.name}</h3>
        <p className="product-price text-muted">{props.price}</p>
        <div className="product-rate">
          <Rating
            start={1}
            initialRating={props.rate}
            emptySymbol={<BsStar />}
            fullSymbol={<BsStarFill color="orange" />}
          />
        </div>
        <p className="product-discount">{props.discount}</p>
      </div>

      <div className="product-options">
        <div className="product-add-cart">
          <BsCart />
        </div>
        <div className="product-compare">
          <BsArrowDownUp />
        </div>
        <div className="product wishlist">
          <BsFillSuitHeartFill />
        </div>
        <div className="product-preview">
          <BsEye />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
