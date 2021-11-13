import React from "react";
import ".././pages.css";
import bg from "../../images/Banner/bannerBg.jpg";
import banner from "../../images/Banner/banner1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerBackground = {
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div id="banner" className="bannerSection" style={bannerBackground}>
      <div className="bannerImage ">
        <img className="" src={banner} alt="Banner Honda" />
      </div>
      <div className="bannerContent">
        <h1
          className="text-center  text-uppercase"
        >
          MoTorCycle
        </h1>
        <div className="button text-center">
          <Link to="/productDetails">
            <button className="btn btn-primary"> More Items</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
