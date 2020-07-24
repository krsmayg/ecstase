import React from 'react';

const posterImageList = (props) => {
  const posterImages = props.images.map(im => {
    return (<div className="product-item">
      <img src={`http://localhost:9000/images/posters/${im}`} alt="Poster image" className="product-item-image"></img>
    </div> )
  });
  return(
    <div className="product-gallery-container">
      <div className="product-gallery">
        {posterImages}
        {posterImages}
      </div>
    </div>
  );
};

export default posterImageList;