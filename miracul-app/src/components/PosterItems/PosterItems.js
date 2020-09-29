import React, { Component, Fragment } from "react";
import Swiper from 'react-id-swiper';
import PosterItem from './PosterItem/PosterItem'
import 'swiper/css/swiper.css';

const PosterItems = (props) => {
  const params = {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    scrollbar: {
      el: '.swiper-scrollbar'
    },
  }
  console.log(props.posters);
  const posters = props.posters.map(poster => (
    <div key={poster.name} id="swiper-slide">
      <PosterItem 
      image={poster.imageCover}
      name = {poster.name} 
      imageHover={poster.imageCoverHover}
      price={poster.price} 
      amount={poster.amount}
      currentAmount={poster.currentAmount}
      slug={poster.slug}
      gotoWallPage={()=> props.goToPage(poster.slug)}
      />
    </div>
 ))
  return (
    <Fragment>
      <Swiper {...params}>
        {posters}
      </Swiper>
    </Fragment>
  )
};

export default PosterItems;