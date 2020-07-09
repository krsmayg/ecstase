import React from 'react';
import "./PosterItem.css"
import Radium from 'radium'
const posterItem = (props) => {
  const style = {
    // backgroundImage: `url(http://localhost:9000/images/posters/${props.image})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    borderRadius: "30px"
   
  }
  return(
    <div className="poster-container">
      <div className="poster-image-box">
        <a className="poster-link" onClick={props.gotoWallPage}>
          <img src={`http://localhost:9000/images/posters/${props.image}`} style={style}></img>
          <img src={`http://localhost:9000/images/posters/${props.imageHover}`} style={style}></img>
        </a>
      </div>
      <div className="poster-title-box">
        <h3 className="product-title-name">
          <span>{props.name}</span>
          <span className="product-title-price">
             from {props.price} $
          </span>
        </h3> 
        <span className="product-title-qnty">
          <span className="qty-all">edition of {props.amount} - </span>
          <span className="qty-current">{props.currentAmount} left</span>
        </span>
      </div>
    </div>
  );
  
}
export default (posterItem);