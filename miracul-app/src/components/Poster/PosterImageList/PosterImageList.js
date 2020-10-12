import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { imageUrl } from '../../../api/axiosConfig';
const PosterImageList = (props) => {
  const [toggler, setToggler] = useState(false);
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
  return (
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
  );
};

export default PosterImageList;
