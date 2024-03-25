import React from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

// Constants
import {
  featured,
  sponsers,
  blogs,
  categories,
  mobiles,
  products,
  hero_banners,
  banners,
} from "constants";

// Components
import { Banner, SBanner, SpecialCard } from "components";
import Product3 from "components/shared/Products/Product3";

import { Grid2Products, Grid3Products } from "components/shared";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Product1 from "components/shared/Products/Product1";

// CSS
import "./Home.scss";

const Home = () => {
  const arrowStyle = {
    fontSize: "1.9rem",
    border: "0px",
    backgroundColro: "transparent",
    borderRadius: "100%",
    padding: "1rem",
  };

  const arrows = {
    prevArrow: (
      <button style={{ ...arrowStyle }}>
        <BsArrowLeft color="blue" />
      </button>
    ),
    nextArrow: (
      <button style={{ ...arrowStyle }}>
        <BsArrowRight color="blue" />
      </button>
    ),
  };

  // const indicators = (index) => <div className="indicator">{index + 1}</div>;

  return (
    <div className="container-xxl">
      <section className="banner-section p-5">
        <div className="banner-wrapper">
          <div className="banners w-100 row mx-0 align-items-center">
            <div className="col-12 col-lg-6 slider-container">
              <Slider
                {...{
                  infinite: false,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  adaptiveHeight: true,
                }}
                {...arrows}
              >
                {hero_banners.map((banner, index) => (
                  <div
                    id="hero-banner"
                    className="hero-banner banner col-12 col-lg-6 p-0"
                  >
                    <Banner
                      {...{
                        image: banner.image,
                        big_title: banner.small_title,
                        small_title: banner.big_title,
                        description: banner.description,
                        link: "/products",
                        className: "each-slide-effect",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Left */}
            <div className="col-12 col-lg-6 p-0">
              <div className="small-banners w-100 row mx-0 gap-1 flex-wrap">
                {banners.map((banner, index) => (
                  <SBanner className={""} key={index} {...banner} />
                ))}
              </div>
              {/* Right */}
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="row">
          {featured.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="feature d-flex align-items-center gap-3">
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h3 className="">{feature.title}</h3>
                  <p className="text-body text-muted ">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <Marquee gradient={200} direction="right">
          <div className="categories">
            {categories.map((category, index) => (
              <div className="category" key={index}>
                <div className="category-content">
                  <h3 className="">{category.name}</h3>
                  <p className="text-body text-muted ">{category.quantity}</p>
                </div>

                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      <section className="sponsers-section">
        <Marquee
          gradient={true}
          speed={40}
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          <div className="sponsers">
            {sponsers.map((sponser, index) => (
              <div className="sponser">
                <img src={sponser.image} alt={`sponser-${index}`} />
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      <h3>Special Products</h3>
      <section className="special-cards">
        {mobiles.map((product, id) => (
          <SpecialCard
            key={id}
            image={product.image}
            category={product.category}
            title={product.name}
            description={product.description}
          />
        ))}
      </section>

      <section className="newsletter-section">
        <h3>Newsletter Blogs</h3>

        <div className="blogs">
          {blogs.map((blog, index) => (
            <div className="blog" key={index}>
              <div className="blog-image">
                <img src={blog.image} alt={`blog-${index}`} />
              </div>
              <div className="blog-content">
                <p className="small text-muted ">{blog.date}</p>
                <h3 className="">{blog.title}</h3>
                <p className="text-body text-muted ">{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="special-collection">
        <Grid2Products products={products} Card={Product1} />
      </section>

      <div className="special-products">
        <Grid3Products products={products} Card={Product3} />
      </div>
    </div>
  );
};

export default Home;
