import React, { Component, Fragment } from "react";
import 'swiper/css/swiper.min.css'
import './PosterItems.css'
import Swiper from 'swiper'
import PosterItem from './PosterItem/PosterItem'

class PosterItems extends Component {
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
    });
  }
   render() {
     const posters = this.props.posters.map(poster => (
        <div className="swiper-slide" key={poster.name}>
          <PosterItem 
          image={poster.imageCover}
          name = {poster.name} 
          imageHover={poster.imageCoverHover}
          price={poster.price} 
          amount={poster.amount}
          currentAmount={poster.currentAmount}
          />
        </div>
     ))
     return (
       <Fragment>
          <div className="swiper-container">
            <div className="swiper-wrapper">
            { posters}
            </div>
          </div>
          <div className="swiper-scrollbar"></div>
       </Fragment>
     )
   }
}
export default PosterItems;