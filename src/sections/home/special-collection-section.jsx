import React from "react";
import { products } from "constants";
import { Grid2Products, Product1 } from "components/shared";

const SpecialCollectionSection = () => {
  return (
    <section className="special-collection">
      <Grid2Products products={products} Card={Product1} />
    </section>
  );
};

export default SpecialCollectionSection;
