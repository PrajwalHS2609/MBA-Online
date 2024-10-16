import React from "react";
import "./HomeApproved.css";
import { Link } from "react-router-dom";
const HomeApprovedCard = (props) => {
  return (
    <div className="HomeApprovedCard">
      <Link to={"/"}>
        {" "}
        <img src={props.img} alt={props.alt} />
      </Link>
    </div>
  );
};

export default HomeApprovedCard;
