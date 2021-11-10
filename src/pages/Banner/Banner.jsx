import React from "react";
import ".././pages.css";
import bg from "../../images/Banner/bannerBg.jpg";
import banner from "../../images/Banner/banner1.jpg";

const Banner = () => {
    const bannerBackground={
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
    }
  return (
    <div className="bannerSection" style={bannerBackground}>
      <div className="bannerImage ">
        <img className="" src={banner} alt="Banner Honda" />
      </div>
      {/* <div className="bannerContent">

      </div> */}
    </div>
  );
};

export default Banner;
