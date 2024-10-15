import React from "react";
import "./HomeTestimonial.css";
import HomeTestimonialCard from "./HomeTestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeTestimonialMain = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="homeTestimonialMain">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="1s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="homeTestimonialMain-content">
          <HomeTestimonialCard />
        </div>
        <div className="homeTestimonialMain-content">
          <HomeTestimonialCard />
        </div>
        <div className="homeTestimonialMain-content">
          <HomeTestimonialCard />
        </div>
        <div className="homeTestimonialMain-content">
          <HomeTestimonialCard />
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default HomeTestimonialMain;
