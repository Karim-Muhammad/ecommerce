import React from "react";
import Marquee from "react-fast-marquee";
import { categories } from "constants";

const CategoriesSection = () => {
  return (
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
  );
};

export default CategoriesSection;
