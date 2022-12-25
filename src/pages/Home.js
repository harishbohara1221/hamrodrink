import React, { useEffect, useState } from "react";
import Body from "../components/ui/Body";
import Productcatagories from "../components/ui/Productcatagories";
import Offerproduct from "../components/ui/Offerproduct";
import Ourproduct from "../components/ui/Ourproduct";

const Home = () => {
  return (
    <>
      <Body />
      <Productcatagories />
      <Offerproduct />
      <Ourproduct />
    </>
  );
};

export default Home;
