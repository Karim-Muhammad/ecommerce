import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCcApplePay,
  FaGooglePlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// CSS
import "./Footer.css";
import Column from "components/Footer/Column";
const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container-xxl">
        <div className="upper py-3 row mx-0 w-100">
          {/* Left Column */}
          <div className="col-12 col-sm-6 d-flex align-items-center gap-3 text-white">
            <img
              className="footer-upper__icon top-0 start-0"
              src="images/newsletter.png"
              alt="newsletter icon"
            />

            <h3>Sign up For Newsletter</h3>
          </div>
          {/* Right Column */}
          <div className="col-12 col-sm-6">
            <form>
              <div className="form-group position-relative">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

                <button
                  type="submit"
                  className="footer-upper-subscribe text-white btn btn-dark position-absolute top-50 translate-middle-y end-0"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="middle py-3">
          <div className="row m-0">
            <div className="col-12 col-md-3">
              <h3 className="text-white">About Us</h3>
              <p className="text-white">
                Demo Store
                <br />
                No. 123, Main Road, New York, 1111 <br />
                United States
              </p>

              <p className="text-white">
                <FaPhone className="me-1" />{" "}
                <a href="tel:+123 456 7890">+123 456 7890</a>
              </p>

              <p className="text-white">
                <FaEnvelope className="me-1" />
                <a href="mailto:kimoomar007@gmail.com">kimoomar007@gmail.com</a>
              </p>
            </div>

            <div className="col-12 col-md-2">
              <Column
                title="Account"
                links={["My Account", "About us", "Faq", "Contact", "Specials"]}
              />
            </div>

            <div className="col-12 col-md-2">
              <Column
                title="Information"
                links={[
                  "Refund Policy",
                  "Shipping Policy",
                  "Terms of Services",
                  "Privacy Policy",
                  "Blogs",
                ]}
              />
            </div>

            <div className="col-12 col-md-2">
              <Column
                title="Quick Links"
                links={["Home", "Laptops", "Cameras", "Tablets", "TVs"]}
              />
            </div>

            <div className="col-12 col-md-3 text-white">
              <h3>Our App</h3>
              <p>
                Download our app and get extra 15% Discount on your first order.
              </p>

              <div className="d-flex flex-wrap gap-1">
                {/* Apple Store */}
                <div className="px-3 py-1 rounded-1 d-flex gap-1 align-items-center bg-white text-dark">
                  <FaCcApplePay className="footer-upper__icon" />
                  <div>
                    <Link to="">Download</Link>
                  </div>
                </div>
                {/* Google Play */}
                <div className="px-3 py-1 rounded-1 d-flex gap-1 align-items-center bg-white text-dark">
                  <FaGooglePlay
                    className="footer-upper__icon
                  "
                  />
                  <div>
                    <Link to="" className="">
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lower">
          <p className="text-center text-white mb-0">
            &copy; {new Date().getFullYear()} All rights reserved by @Karim
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
