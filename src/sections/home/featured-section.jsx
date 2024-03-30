import { featured } from "constants";
import React from "react";

const FeaturedSection = () => {
  return (
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
  );
};

export default FeaturedSection;
