import { Breadcrump } from "components";
import React from "react";

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

          <div className="cart-list w-100">
            <table className="w-100 table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {/* <tr>
                  <td>Product 1</td>
                  <td>$100</td>
                  <td>
                    <input type="number" value="1" />
                  </td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>$200</td>
                  <td>
                    <input type="number" value="1" />
                  </td>
                  <td>$200</td>
                </tr> */}
                <tr>
                  <td>
                    <div className="product d-flex gap-2">
                      <img
                        className="w-25 object-fit-cover "
                        src="/images/product1.webp"
                        alt="Product 1"
                      />
                      <div className="product-info p-3">
                        <h3>Zoom Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h3>
                        <p>Color: Red</p>
                        <p>Size: M</p>
                      </div>
                    </div>
                  </td>
                  <td className="fw-bold">$300</td>
                  <td>
                    <input type="number" value="1" />
                  </td>
                  <td>$300</td>
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
