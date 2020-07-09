import React from 'react'
import './PosterDescription.css'
import Accardion from './AccordionDescription/AccordionDescription'
const posterDescription = (props) => {
  return (
    <div className="product-info">
      <div className="product-info-wrapper">
      <h3 className="product-info-title">
        {props.title}
        <span className="product-info-price">${props.price}</span>
      </h3>
      <div className="product-info-size">
        <div className="product-info-size-link" onClick={(event) =>props.priceHandle(event)}>S</div>
        <div className="product-info-size-link" onClick={(event) =>props.priceHandle(event)}>M</div>
        <div className="product-info-size-link active" onClick={(event) =>props.priceHandle(event)}>L</div>
      </div>
      <button className="product-info-btn">
        ${props.price} - Add to cart
      </button>
      <div className="product-info-description">
        <p>{props.description}</p>
        <p>In stunningly detailed illustrative style, this artwork plays on a movement between cool and warm colors - all brought together harmoniously with clear lines and engaging context.</p>
      </div>
      <Accardion />
    </div>
    </div>
  )
}


export default posterDescription;