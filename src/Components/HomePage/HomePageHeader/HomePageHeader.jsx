import React from "react";
import "./HomePageHeader.css";

import bannerImg from "./../../../Imgs/homeBanner.png";
import mobileBanner from "./../../../Imgs/homeBannerMobile.png";
import { Link } from "react-router-dom";
const HomePageHeader = () => {
  let handleForm = (e) => {
    e.preventDefault();
    document.querySelector(".homeEnquiryForm").style.visibility = "visible";
  };
  return (
    <>
      <div className="homePageHeader">
        <div className="homePageContent">
          <div className="homePageItem">
            <img src={bannerImg} alt="bannerImg4" />
            <div className="headerImgCover">
              <Link to={"/"}>
                <button onClick={handleForm}>Register Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------Mobile--------------------- -------*/}
      <div className="homeHeaderMobile">
        <img src={mobileBanner} alt="mobileBanner" />
        <div className="headerMobileImgCover">
          <Link to={"/"}>
            <button onClick={handleForm}>Register Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageHeader;
