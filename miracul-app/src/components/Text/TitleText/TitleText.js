import React from 'react'
import './TitleText.css'
const titleText = (props) =>(
  <div className="home-product-title-container">
    <h2>
      <span className="mTitle">
        <span className="mTitle-el">
        {props.mainText}
        </span>
      </span>
      <span className="sTitle">{props.sText}</span>
    </h2>
  </div>
)
export default titleText