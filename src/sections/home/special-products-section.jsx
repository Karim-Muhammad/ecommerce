import React from "react";
import { products } from "constants";
import { Grid3Products, Product3 } from "components/shared";

const SpecialProductsSection = () => {
  return (
    <div className="special-products">
      <Grid3Products products={products} Card={Product3} />
    </div>
  );
};

export default SpecialProductsSection;
