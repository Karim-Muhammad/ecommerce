import React from "react";
import { SpecialCard } from "components";
import { mobiles } from "constants";

const SpecialCardsSection = () => {
  return (
    <>
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
    </>
  );
};

export default SpecialCardsSection;
