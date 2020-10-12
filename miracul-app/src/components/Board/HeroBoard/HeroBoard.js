import React from "react";
import heroPc from "../../../assets/images/hero-board-pc.jpg";
import heroMb from "../../../assets/images/hero-board-mb.jpg";
const heroBoard = () => (
  <div className="hero-container">
    <img src={heroPc} className="hero-img-pc"></img>
    <img src={heroMb} className="hero-img-mb"></img>
    <div className="hero__text-box">
      <h2 className="title-primary">
        <span className="title-primary--main">New Release artworks</span>
        <br></br>
        <span className="title-primary--sub">ready now</span>
      </h2>
      <a href="/" className=" btn btn-white btn--animated">
        Shop art now
      </a>
    </div>
  </div>
);
export default heroBoard;
