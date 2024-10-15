import React from "react";
import { Link } from "react-router-dom";

const FooterUniversity = () => {
  return (
    <div className="footerUniversity">
      <h4>Top Universities</h4>
      <ul>
        <li>
          <Link to={"/"}>Amity University</Link>
        </li>
        <li>
          <Link to={"/"}>Jain University</Link>
        </li>
        <li>
          <Link to={"/"}>Manipal Online</Link>
        </li>
        <li>
          <Link to={"/"}>LPU Online</Link>
        </li>
        <li>
          <Link to={"/"}>NMIMS University</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterUniversity;
