import React, { useEffect, useState } from "react";
import "./HomePageHeader.css";
import Carousel from "react-bootstrap/Carousel";
import bannerImg from "./../../../Imgs/homeBanner1.png";
import bannerImg2 from "./../../../Imgs/homeBanner2.png";
import bannerImg3 from "./../../../Imgs/homeBanner3.png";

const HomePageHeader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homePageHeader">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="homePageContent">
            <div className="homePageItem">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="homePageContent">
            <div className="homePageItem">
              <img src={bannerImg2} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="homePageContent">
            <div className="homePageItem">
              <img src={bannerImg3} alt="" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePageHeader;
