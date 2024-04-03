import React from "react";
import Rating from "react-rating";
import { BsHeart, BsHeartFill, BsStar, BsStarFill } from "react-icons/bs";
import { Countdown } from "components/shared";

import "./Product3.scss";
import { Link } from "react-router-dom";
export default function Product3({ product, className }) {
  const [love, setLove] = React.useState(false);

  const discount = (price, discount) => {
    return price - (price * discount) / 100;
  };

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className={`product ${className || ""}`} key={product.id}>
        <div className="product-images">
          <img
            src={`images/product${product.id + 1}.webp`}
            alt={product.name}
          />

          <div className="small-images">
            <img className="" src={product.image} alt={product.name} />
            <img className="" src={product.image} alt={product.name} />
          </div>

          <div className="floats">
            {product.discount > 0 && (
              <div className="product-discount">
                <span className="discount">-{product.discount}% off</span>
              </div>
            )}

            <div
              className="product-wishlist"
              onClick={() => setLove((p) => !p)}
            >
              {!love ? <BsHeart /> : <BsHeartFill />}
            </div>
          </div>
        </div>
        <div className="product-content">
          <h5 className="product-category">{product.category}</h5>
          <h3 className="product-title">
            <Link to="/product/1">{`${product.name.substring(0, 10)}...`}</Link>
          </h3>
          <div className="product-rate">
            <Rating
              start={1}
              initialRating={6}
              stop={6}
              fractions={2}
              emptySymbol={<BsStar />}
              fullSymbol={<BsStarFill color="orange" />}
            />{" "}
          </div>

          <p className="product-price text-body text-muted">
            <span className="price">
              {product.discount > 0
                ? `${USDollar.format(
                    discount(product.price, product.discount)
                  )}`
                : `${USDollar.format(product.price)}`}
            </span>

            {product.discount > 0 && (
              <span className="discount">{USDollar.format(product.price)}</span>
            )}
          </p>
          {product.discount > 0 && <Countdown section={"product"} />}
          <div className="product-quantity my-3">
            <p className="text-muted">
              Quantity: <span>5</span>
            </p>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="btn btn-primary">Buy now</div>
        </div>
      </div>
    </>
  );
}
