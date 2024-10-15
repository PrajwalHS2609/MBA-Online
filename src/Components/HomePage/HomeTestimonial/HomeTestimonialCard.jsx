import React from "react";
import "./HomeTestimonial.css";
import quote from "./../../../Imgs/quote.png";
const HomeTestimonialCard = () => {
  return (
    <div className="homeTestimonialCard">
      <div className="homeTestimonialCard-img">
        <img
          src="https://www.learningroutes.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManav-Dhodare.88482505.webp&w=96&q=75"
          alt=""
        />
      </div>
      <img src={quote} alt="" />
      <p>
        Learning Routes provided me with a seamless learning experience; it was
        like an excellent experience. Yash sir helped me with each and every
        part of assignments and exam schedules on time.
      </p>
      <h6>-Manav Dhodare</h6>
    </div>
  );
};

export default HomeTestimonialCard;
