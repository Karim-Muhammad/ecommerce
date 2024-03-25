import React from "react";

import "./../Grid.scss";
export default function Grid3Products({ products, Card }) {
  return (
    <>
      <div className="grid3-products">
        {products.map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </div>
    </>
  );
}
