import React, { Component } from "react";
import img1 from "../../assets/images/shop-image-1.jpg";
import img2 from "../../assets/images/shop-image-2.jpg";
import img3 from "../../assets/images/shop-image-3.jpg";
import video from "../../assets/videos/shop-page.mp4";

const shopPageInfo = () => {
  return (
    <div className="shopify-section">
      <div className="product-detail-block">
        <div className="container">
          <img src={img1} className="product-detail-img"></img>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <div className="shopify-text-box">
            <h1 className="shopify-title"> A true work of art</h1>
            <p className="shopify-text">
              Printed on 200gsm polyester canvas, using 12-colour digital print
              and archival ink, this artwork pops. A matte finish makes for
              great contrast in all lighting situations. The frame is made from
              Marupa wood, and set with neodynium magnets on the inside.
            </p>
          </div>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <video autoPlay muted playsInline loop width="100%">
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <div className="shopify-text-box">
            <h1 className="shopify-title">Easy to install</h1>
            <p className="shopify-text">
              With a combination of stickers and magnetic frame parts, this
              piece is on your wall on no-time. No need to drill (unless you
              want to), and everything you need is included
            </p>
          </div>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <img src={img2} className="product-detail-img"></img>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <div className="shopify-text-box">
            <h1 className="shopify-title"> Painted work?</h1>
            <p className="shopify-text">
              If you choose one of our painted works, you're in for something
              really special. Our artists touch up the already great prints with
              a layer of hand-painted accents.
            </p>
          </div>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <img src={img3} className="product-detail-img"></img>
        </div>
      </div>
      <div className="product-detail-block">
        <div className="container">
          <div className="shopify-text-box">
            <h1 className="shopify-title">In the box</h1>
            <p className="shopify-text">
              You'll receive everything you need to hang this amazing artwork.
              Using the included foam stickers the artwork can be secured to
              your wall safely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shopPageInfo;
