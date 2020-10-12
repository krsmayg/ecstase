import React from "react";
import newsPc from "../../../assets/images/news-board-pc.jpg";
import newsMb from "../../../assets/images/news-board-mb.jpg";
const newsBoard = () => (
  <div className="news-container">
    <img src={newsPc} className="news-img-pc"></img>
    <img src={newsMb} className="news-img-mb"></img>
  </div>
);
export default newsBoard;
