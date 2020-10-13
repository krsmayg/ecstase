import React from "react";
// import './PosterDescription.css'
import Accardion from "./AccordionDescription/AccordionDescription";
const posterDescription = (props) => {
  const sizeRender = () => {
    if (props.sizes) {
      console.log('Sizes: ',  props.sizes);
      return props.sizes.map((size) => (
        <div className="product-info-size-link" onClick={(event) => props.priceHandler(event, size._id)} key={size._id} id={size._id}>
          {size.name}
        </div>
      ));
    }
  };
  return (
    <div className="product-info">
      <div className="product-info-wrapper">
        <h3 className="product-info-title">
          {props.title}
          <span className="product-info-price">${props.price}</span>
        </h3>
        <div className="product-info-size">
          {sizeRender()}
        </div>
        <div className="product-info-amount">
          {props.amountInfo}
        </div>
        <button className="product-info-btn" onClick={props.addtoBasket}>
          ${props.price} - Add to cart
        </button>
        <div className="product-info-description">
          <p>{props.description}</p>
          <p>
            In stunningly detailed illustrative style, this artwork plays on a
            movement between cool and warm colors - all brought together
            harmoniously with clear lines and engaging context.
          </p>
        </div>
        <Accardion />
      </div>
    </div>
  );
};

export default posterDescription;
