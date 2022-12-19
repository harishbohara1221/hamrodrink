import React from "react";
import Navbar from "../components/ui/Navbar";
import Head from "../components/ui/Head";
import Body from "../components/ui/Body";
import Productcatagories from "../components/ui/Productcatagories";
import Offerproduct from "../components/ui/Offerproduct";
import Ourproduct from "../components/ui/Ourproduct";
import Footer from "../components/ui/Footer";


const Home = () => {
  return (
    <>
  <Head/>  
  <Navbar/>
  <Body/>
  <Productcatagories/>
  <Offerproduct/>
  <Ourproduct/>
  <Footer/>
  </>
);
};

export default Home;