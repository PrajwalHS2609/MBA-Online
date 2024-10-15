import React from "react";
import { Link } from "react-router-dom";

const FooterTopPg = () => {
  return (
    <div className="footerUniversity">
      <h4>Top PG Courses</h4>
      <ul>
        <li>
          <Link to={"/"}>Online MBA</Link>
        </li>
        <li>
          <Link to={"/"}>Distance MBA</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTopPg;
