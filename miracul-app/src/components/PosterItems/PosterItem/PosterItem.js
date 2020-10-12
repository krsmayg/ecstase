import React from "react";
import Radium from "radium";
import { imageUrl } from "../../../api/axiosConfig";
const posterItem = (props) => {
  const style = {
    // backgroundImage: `url(http://localhost:9000/images/posters/${props.image})`,
  };
  return (
    <div className="poster-container">
      <div className="poster-image-box">
        <div className="poster-link" onClick={props.gotoWallPage}>
          <img
            src={`${imageUrl}/posters/${props.image}`}
            style={style}
            className="poster-link__img--front"
          ></img>
          <img
            src={`${imageUrl}/posters/${props.imageHover}`}
            style={style}
            className="poster-link__img--back"
          ></img>
        </div>
      </div>
      <div className="poster-title-box">
        <h3 className="product-title-name">
          <span>{props.name}</span>
          <span className="product-title-price">from {props.price} $</span>
        </h3>
        <span className="product-title-qnty">
          <span className="qty-all">edition of {props.amount} - </span>
          <span className="qty-current">{props.currentAmount} left</span>
        </span>
      </div>
    </div>
  );
};
export default posterItem;
