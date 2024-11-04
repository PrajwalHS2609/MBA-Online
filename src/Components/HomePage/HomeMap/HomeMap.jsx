import React from "react";
import "./HomeMap.css";
const HomeMap = () => {
  return (
    <div className="homeMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.439957122456!2d77.640821!3d13.021659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171dd011b4e5%3A0xabab1818c3e26cae!2sPrizma%20Academy!5e0!3m2!1sen!2sin!4v1729159303297!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Home Map"
      ></iframe>
    </div>
  );
};

export default HomeMap;
