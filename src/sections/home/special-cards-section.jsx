import React from "react";
import { SpecialCard } from "components";
import { mobiles } from "constants";

const SpecialCardsSection = () => {
  return (
    <>
      <h3>Special Products</h3>
      <section className="special-cards row mx-0">
        {mobiles.map((product, id) => (
          <SpecialCard
            className="col-12 col-sm-6 col-lg-4"
            key={id}
            image={product.image}
            category={product.category}
            title={product.name}
            description={product.description}
          />
        ))}
      </section>
    </>
  );
};

export default SpecialCardsSection;
