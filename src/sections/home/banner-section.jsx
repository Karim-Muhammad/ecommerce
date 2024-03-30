import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

import { Banner, SBanner } from "components";
import { banners, hero_banners } from "constants";

const BannerSection = () => {
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

  return (
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
  );
};

export default BannerSection;
