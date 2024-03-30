import React from "react";
// CSS
import "./Home.scss";

// Sectionss
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
