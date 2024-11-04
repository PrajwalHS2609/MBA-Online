import React from "react";
import { Link } from "react-router-dom";

const OnlineMbaSpec = () => {
  return (
    <div className="footerUniversity">
      <h4>Online MBA Specialisations</h4>
      <ul>
        <li>
          <Link to={"/"}>MBA (General Management)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Finance)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Marketing)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (HR Management)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Operation)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Information Technology)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Supply Chain Management)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Data Analytics)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Business Analytics)</Link>
        </li>
        <li>
          <Link to={"/"}>MBA (Hospitality Management)</Link>
        </li>
      </ul>
    </div>
  );
};

export default OnlineMbaSpec;
