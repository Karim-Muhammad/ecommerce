import React from "react";
import Marquee from "react-fast-marquee";

// Constants
import {
  featured,
  sponsers,
  blogs,
  categories,
  mobiles,
  products,
} from "constants";

// Components
import Product3 from "components/shared/Products/Product3";

import { Grid2Products, Grid3Products } from "components/shared";

import Product1 from "components/shared/Products/Product1";

// CSS
import "./Home.scss";

// Sections
import {
  BannerSection,
  FeaturedSection,
  CategoriesSection,
  SpecialCardsSection,
  SponsersSection,
  NewsletterSection,
  SpecialCollectionSection,
  SpecialProductsSection,
} from "../../sections/home";

const Home = () => {
  return (
    <div className="container-xxl">
      <BannerSection />

      <FeaturedSection />

      <CategoriesSection />

      <SponsersSection />

      <SpecialCardsSection />

      <NewsletterSection />

      <SpecialCollectionSection />

      <SpecialProductsSection />
    </div>
  );
};

export default Home;
