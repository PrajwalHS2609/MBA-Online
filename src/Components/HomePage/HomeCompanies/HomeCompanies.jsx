import React from "react";
import "./HomeCompanies.css";
import HomeCompaniesHead from "./HomeCompaniesHead";
import ibm from "./../../../Imgs/CompniesLogo/IBM_logo.png";
import amazon from "./../../../Imgs/CompniesLogo/Amazon_logo.png";
import microsoft from "./../../../Imgs/CompniesLogo/Microsoft_logo.png";
import flipkart from "./../../../Imgs/CompniesLogo/Flipkart_logo.png";
import practo from "./../../../Imgs/CompniesLogo/Practo_logo.png";

const HomeCompanies = () => {
  return (
    <div className="homeCompanies">
      <HomeCompaniesHead />
      <div className="homeCompaniesImgWrapper">
        {" "}
        <div className="homeCompaniesImg">
          <img src={ibm} alt="ibm" />
        </div>
        <div className="homeCompaniesImg">
          <img src={amazon} alt="amazon" />
        </div>
        <div className="homeCompaniesImg">
          <img src={microsoft} alt="microsoft" />
        </div>
        <div className="homeCompaniesImg">
          <img src={flipkart} alt="flipkart" />
        </div>
        <div className="homeCompaniesImg">
          <img src={practo} alt="practo" />
        </div>
      </div>
    </div>
  );
};

export default HomeCompanies;
