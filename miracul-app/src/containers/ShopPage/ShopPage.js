import { Component, Fragment } from "react";
import React from 'react';
import axios from 'axios'

import img1 from "../../assets/images/hero-board.jpg"
import img2 from "../../assets/images/shop-image-1.jpg"
import img3 from "../../assets/images/shop-image-1.jpg"

import PosterImageList from '../../components/Poster/PosterImageList/PosterImageList';
import PosterDescription from '../../components/Poster/PosterDescription/PosterDescription'
import './ShopPage.css'

import TitleText from '../../components/Text/TitleText/TitleText'


class ShopPage extends Component {
  state = {
    poster:null,
    price: 250
  }
  posterPriceHandler = (e) => {
    const prices = [this.state.poster.price, this.state.poster.price -10, this.state.poster.price-20]
    const size = e.target.textContent;
    if(size === 'L') {
      this.setState({price: prices[0]})
    }else if(size === 'M') {
      this.setState({price: prices[1]})
    }else if(size === 'S') {
      this.setState({price: prices[2]})
    }
    else {
      this.setState({price: this.state.poster.price});
    }
  }
  componentDidMount() {
    const query= this.props.location.search;
    const slug = query.split('=')[1];
    console.log(slug);
    axios.get(`http://localhost:9000/api/v1/posters/poster/${slug}`).then(res => {
      const poster = {...res.data.data.poster};
      if(poster) {
        this.setState({poster});
        // console.log(this.state.poster.images);
      }
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    let postersImages = null;
    let posterDescription = null;
    if(this.state.poster) {
       postersImages = <PosterImageList images={this.state.poster.images} />
       posterDescription = <PosterDescription
       price={this.state.price} 
       title={this.state.poster.name}
       description={this.state.poster.description}
       priceHandle= {this.posterPriceHandler}
       />
    } else {
       console.log('smth bad')
    }
    return(
      <Fragment>
        <h1>I am a Shop page component :)</h1>
        <div className="shop-page-container">
          {posterDescription}
          {postersImages}
        </div>
     
        <div className="product-shop-container">
          <div className="product-shop-image">
          </div>
        </div>
        {/* <div className="product-shop-wrapper">
          <div className="product-shop-info">
            <div className="product-shop-info-text">
              <h3 className="product-shop-info-text-title">A true work of art</h3>
              <p  className="product-shop-info-text-text">Printed on 200gsm polyester canvas, using 12-colour digital print and archival ink, this artwork pops. A matte finish makes for great contrast in all lighting situations. The frame is made from Marupa wood, and set with neodynium magnets on the inside.</p>
            </div>
          </div>
        </div> */}
    
      </Fragment>
    );
  };
};
export default ShopPage;