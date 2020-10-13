import React, { Component, Fragment, useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import PosterItem from "./PosterItem/PosterItem";
import "swiper/css/swiper.css";
import { useMediaQuery } from "react-responsive";

const PosterItems = React.memo((props) => {
  const [swiper, updateSwiper] = useState(null);
  // const [slidesView, setSlidesView] = useState(3);
  const phoneScreen = useMediaQuery({ query: "(max-width: 480px)" });
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 4,
    // loop: true,
    loopFillGroupWithBlank: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  };
  useEffect(() => {
    console.log("Params: ", params);
    console.log("Match size", phoneScreen);
  }, [phoneScreen]);
  console.log(props.posters);
  const posters = props.posters.map((poster) => (
    <div key={poster.name} id="swiper-slide">
      <PosterItem
        image={poster.imageCover}
        name={poster.name}
        imageHover={poster.imageCoverHover}
        price={poster.price}
        amountArray={poster.amountArray}
        currentAmount={poster.currentAmount}
        slug={poster.slug}
        gotoWallPage={() => props.goToPage(poster.slug)}
        totalAmountLeft = {poster.totalAmountLeft}
        totalAmountOf = {poster.totalAmountOf}
      />
    </div>
  ));
  return (
    <Fragment>
      <div className="poster-list">
        <Swiper {...params} shouldSwiperUpdate>
          {posters}
        </Swiper>
      </div>
    </Fragment>
  );
});

export default PosterItems;
