import { Component, Fragment } from "react";
import React from 'react';
import axios from 'axios'


import PosterImageList from '../../components/Poster/PosterImageList/PosterImageList';
import PosterDescription from '../../components/Poster/PosterDescription/PosterDescription';
import TitleText from '../../components/Text/TitleText/TitleText';
import ShopPageInfo from '../../components/ShopPageInfo/ShopPageInfo';

import Spinner from '../../components/UI/Spinner/Spinner';
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
      postersImages = <Spinner />
    }
    return(
      <Fragment>
        <h1>I am a Shop page component :)</h1>
        <div className="shop-page-container">
          {posterDescription}
          {postersImages}
        </div>
         <ShopPageInfo />
      </Fragment>
    );
  };
};
export default ShopPage;