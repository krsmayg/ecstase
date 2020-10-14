import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { imageUrl } from '../../../api/axiosConfig';
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { useMediaQuery } from "react-responsive";
const PosterImageList = (props) => {
  const [toggler, setToggler] = useState(false);
  const tabletScreen = useMediaQuery({ query: "(max-width: 765px)" });

  const params = {
    slidesPerView: 1,
    slidesPerGroup: 4,
    // loop: true,
    loopFillGroupWithBlank: true,
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  };
  const posterImages = props.images.map((im) => {
    return (
      <div className="product-item" onClick={() => setToggler(!toggler)}>
        {console.log(im)}
        <img
          src={`${imageUrl}/posters/${im}`}
          alt="Poster image"
          className="product-item-image"
        ></img>
      </div>
    );
  });
  const desktopContent  = (
    <div className="product-gallery-container">
      <div className="product-gallery">
        {posterImages}
        {posterImages}
        <FsLightbox
          toggler={toggler}
          sources={props.images.map((im) => {
            return `${imageUrl}/posters/${im}`;
          })}
          key={props.images}
        />
      </div>
    </div>
  )
 const tabletContent = (
   <div style={{width: '100%', textAlign: 'center'}}>
    <Swiper {...params} shouldSwiperUpdate>
      {posterImages}
    </Swiper>
    <FsLightbox
          toggler={toggler}
          sources={props.images.map((im) => {
            return `${imageUrl}/posters/${im}`;
          })}
          key={props.images}
        />
   </div>
 
 )
  return (
    tabletScreen ? tabletContent : desktopContent
  );
};

export default PosterImageList;
