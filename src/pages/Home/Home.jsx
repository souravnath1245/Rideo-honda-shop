import React from "react";
import Navlink from "../../Shared/Navlink";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import Footer from "../Footer/Footer";
import Products from "../Product/Products";
import Review from "../Reviews/Review";

const Home = () => {
  return (
    <div>
      <Navlink />
      <Banner />
      <Products/>
      <Extra />
      <Review/>
      <Footer />
    </div>
  );
};

export default Home;
