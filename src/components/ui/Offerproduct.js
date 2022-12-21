import React from "react";
import OfferCard from "./OfferCard";

const Offerproduct = () => {
  return (
    <div className="Offerproduct">
      <div className="container">
        <div className="row">
          <div className="Offershead">
            <h1>Offer Product</h1>
            <p>
              HamroDrinks Products With Offers |{" "}
              <a href=" ">
                <span>
                  View all <i class="fa-solid fa-chevron-right"></i>
                </span>
              </a>
            </p>
          </div>

          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 outbox">
                <OfferCard />
              </div>
              <div className="col-md-6 outbox">
                <OfferCard />
              </div>
              <div className="col-md-6 outbox">
                <OfferCard />
              </div>
              <div className="col-md-6 outbox">
                <OfferCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerproduct;
