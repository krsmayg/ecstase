import React from "react";
// import './NavigationItem.css'
import { Link } from "react-router-dom";
const navigationItem = (props) => (
  <li className="nav_link">
    <Link to={props.link}>
      {props.children}
    </Link>
  </li>
);

export default navigationItem;
