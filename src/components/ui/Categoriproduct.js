import React from "react";
import ProductCard from "./ProductCard";

const Productview = () => {
  return (
    <div className="Productview">
      <div className="container">
        <h2>Explore Our Amazing Selection</h2>
        <div className="row">
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
          <div className="col-md-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productview;
