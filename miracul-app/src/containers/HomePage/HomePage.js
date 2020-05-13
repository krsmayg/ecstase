import React, { Component } from "react";
import { Fragment } from "react";
import axios from 'axios'
import HeroBoard from '../../components/HeroBoard/HeroBoard';
import PosterItems from '../../components/PosterItems/PosterItems'
import NewsBoard from "../../components/NewsBoard/NewsBoard";
import VideoBoard from '../../components/VideoBoard/VideoBoard';
import './HomePage.css'
class HomePage extends Component {
  state = {
    posters: [],
    error: true
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/v1/posters').then(res => {
      const posters = res.data.data.docs;
      const updatedPosters = posters.map(poster => {
        return {
          ...poster
        }
      });
      this.setState({posters: updatedPosters})
      console.log(this.state.posters);
    }).catch(err => {
      this.setState({error: true})
      console.log(err)
    })
  };
  render() {
    return (
      <Fragment>
        <HeroBoard />
        <br />
        <div className="home-product-title-container">
         <h2>
           <span className="mTitle">
             <span className="mTitle-el">
              New Release
             </span>
           </span>
           <span className="sTitle">THIS WEEK’S RELEASE OF LIMITED ARTWORKS</span>
         </h2>
        </div>
        <br />
        <PosterItems posters={this.state.posters} />
        <NewsBoard />
        <br />
        <div className="home-product-title-container">
         <h2>
           <span className="mTitle">
             <span className="mTitle-el">
             Sold products
             </span>
           </span>
           <span className="sTitle">DON’T MISS THE CHANCE TO GET YOUR ARTWORK</span>
         </h2>
        </div>
        <h1>in proccess....</h1>
        <VideoBoard />
      </Fragment>
    )
  }
}
export default HomePage;
