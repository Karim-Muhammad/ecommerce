import { Breadcrump } from "components";
import { Color, QuantityButton } from "components/shared";
import React from "react";
import { BsTrash } from "react-icons/bs";

import "./Cart.scss";
const Cart = () => {
  return (
    <div className="pg-cart">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { link: "/", name: "Home" },
            { link: "/cart", name: "Cart" },
          ]}
        />
      </div>

      <div className="pg-content">
        <div className="container-xxl">
          <h1>Cart</h1>

          <div className="cart-list table-responsive w-100">
            <table className="w-100 table table-striped">
              <thead>
                <tr>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="total">Total</th>
                </tr>
              </thead>

              <tbody>
                {/* One */}
                <tr>
                  <td className="td-product-name">
                    <div className="product d-flex gap-2">
                      <img
                        className="w-25 object-fit-cover "
                        src="/images/product1.webp"
                        alt="Product 1"
                      />
                      <div className="product-info p-3">
                        <h3>Zoom Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h3>
                        <p>
                          Color: Red{" "}
                          <div className="colors">
                            <Color color={"red"} />
                          </div>
                        </p>
                        <p>Size: M</p>
                      </div>
                    </div>
                  </td>

                  <td className="td-product-price fw-bold">$300</td>

                  <td className="td-product-quantity">
                    <QuantityButton />
                  </td>

                  <td className="td-product-total">
                    <span className="fw-bold">$300</span>

                    <button className="btn btn-dark btn-sm ms-2">
                      <BsTrash />
                    </button>
                  </td>
                </tr>
                {/* Two */}
                <tr>
                  <td className="td-product-name">
                    <div className="product d-flex gap-2">
                      <img
                        className="w-25 object-fit-cover "
                        src="/images/product2.webp"
                        alt="Product 1"
                      />
                      <div className="product-info p-3">
                        <h3>Apple iPad Mini 6 Wi-Fi Cellular 64GB/128GB</h3>
                        <p>
                          Color: Red{" "}
                          <div className="colors">
                            <Color color={"green"} />
                          </div>
                        </p>
                        <p>Size: M</p>
                      </div>
                    </div>
                  </td>

                  <td className="td-product-price fw-bold">$300</td>

                  <td className="td-product-quantity">
                    <QuantityButton />
                  </td>

                  <td className="td-product-total">
                    <span className="fw-bold">$300</span>

                    <button className="btn btn-dark btn-sm ms-2">
                      <BsTrash />
                    </button>
                  </td>
                </tr>
                {/* Three */}
                <tr>
                  <td className="td-product-name">
                    <div className="product d-flex gap-2">
                      <img
                        className="w-25 object-fit-cover "
                        src="/images/product3.webp"
                        alt="Product 1"
                      />
                      <div className="product-info p-3">
                        <h3>Zoom Samsung Galaxy S22 Plus 5G 8GB/128GB</h3>
                        <p>
                          Color: Red{" "}
                          <div className="colors">
                            <Color color={"brown"} />
                          </div>
                        </p>
                        <p>Size: M</p>
                      </div>
                    </div>
                  </td>

                  <td className="td-product-price fw-bold">$300</td>

                  <td className="td-product-quantity">
                    <QuantityButton />
                  </td>

                  <td className="td-product-total">
                    <span className="fw-bold">$300</span>

                    <button className="btn btn-dark btn-sm ms-2">
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
