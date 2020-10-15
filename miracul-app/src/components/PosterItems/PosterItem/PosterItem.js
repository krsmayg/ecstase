import React, {useEffect, useState} from "react";
import Radium from "radium";
import { imageUrl } from "../../../api/axiosConfig";
 import withTagController from "../../../hoc/tagController/tagController";

const PosterItem = (props) => {
  return (
    <div className="poster-container">
      <div className="poster-image-box">
        <div className="poster-link" onClick={props.gotoWallPage}>
          <img
            src={`${imageUrl}/posters/${props.image}`}
            className="poster-link__img--front"
          ></img>
          <img
            src={`${imageUrl}/posters/${props.imageHover}`}
            className="poster-link__img--back"
          ></img>
          <div className="poster-tags">
            {props.tags.map(tag => (
              <div className="poster-tags__tag">{tag}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="poster-title-box">
        <h3 className="product-title-name">
          <span>{props.name}</span>
          <span className="product-title-price">from {props.price} $</span>
        </h3>
        <span className="product-title-qnty">
          <span className="qty-all">edition of {props.totalAmountOf} - </span>
          <span className="qty-current">{props.totalAmountLeft} left</span>
        </span>
      </div>
    </div>
  );
};
export default withTagController(PosterItem);
