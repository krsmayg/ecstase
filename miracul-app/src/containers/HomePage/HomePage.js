import React, { Component } from "react";
import { Fragment } from "react";
import axios from 'axios'
import HeroBoard from '../../components/Board/HeroBoard/HeroBoard';
import PosterItems from '../../components/PosterItems/PosterItems'
import NewsBoard from "../../components/Board/NewsBoard/NewsBoard";
import VideoBoard from '../../components/Board/VideoBoard/VideoBoard';
import TitleText from '../../components/Text/TitleText/TitleText';
import Spinner from '../../components/UI/Spinner/Spinner'
import './HomePage.css'
class HomePage extends Component {
  state = {
    posters: [],
    error: true,
    loading:false
  }
  componentDidMount() {
    this.setState({loading:true});
    axios.get('http://localhost:9000/api/v1/posters').then(res => {
      const posters = res.data.data.docs;
      const updatedPosters = posters.map(poster => {
        return {
          ...poster
        }
      });
      if(updatedPosters) {
        this.setState({loading:false});
        this.setState({posters: updatedPosters})
      }
      console.log(this.state.posters);
    }).catch(err => {
      this.setState({error: true})
      console.log(err)
    })
  }; 
  goToDetailPosterHandler =(slug) => {
    const queryParams = encodeURIComponent("artwork") + '=' + encodeURIComponent(slug);
    this.props.history.push({
      pathname:'/wallshop',
      search: '?' + queryParams
    })
  }
  render() {
    let posterItems = null;
    if( this.state.posters) {
      posterItems = <PosterItems posters={this.state.posters} goToPage={this.goToDetailPosterHandler}/>
    }
    if (this.state.loading) {
      posterItems = <Spinner />
    }
    return (
      <Fragment>
        <HeroBoard />
        <br />
        <TitleText mainText="New Release" sText="THIS WEEK’S RELEASE OF LIMITED ARTWORKS" />
        {posterItems}
        <NewsBoard />
        <br />
        <TitleText mainText="Sold products" sText="DON’T MISS THE CHANCE TO GET YOUR ARTWORK" />
        <h1>in proccess....</h1>
        <VideoBoard />
      </Fragment>
    )
  }
}
export default HomePage;
