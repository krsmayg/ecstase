import React, { Component } from "react";
import { Fragment } from "react";

import HeroBoard from '../../components/Board/HeroBoard/HeroBoard';
import PosterItems from '../../components/PosterItems/PosterItems'
import NewsBoard from "../../components/Board/NewsBoard/NewsBoard";
import VideoBoard from '../../components/Board/VideoBoard/VideoBoard';
import TitleText from '../../components/Text/TitleText/TitleText';
import Spinner from '../../components/UI/Spinner/Spinner';

import {fetchPosters} from '../../actions'
import { connect } from "react-redux";
class HomePage extends Component {
  state = {
    error: true,
    loading:false
  }
  componentDidMount() {
    this.props.fetchPosters();
  }; 
  goToDetailPosterHandler =(slug) => {
    const queryParams = encodeURIComponent("artwork") + '=' + encodeURIComponent(slug);
    this.props.history.push({
      pathname:'/wallshop',
      search: '?' + queryParams
    })
  }
  renderPosters() {
    return !this.props.posters ? <Spinner /> : <PosterItems posters={this.props.posters} goToPage={this.goToDetailPosterHandler}/>
  }
  render() {
    return (
      <Fragment>
        <HeroBoard />
        <TitleText mainText="New Release" sText="THIS WEEK’S RELEASE OF LIMITED ARTWORKS" />
        {this.renderPosters()}
        <NewsBoard />
        <br />
        <TitleText mainText="Sold products" sText="DON’T MISS THE CHANCE TO GET YOUR ARTWORK" />
        <Spinner />
        <VideoBoard />
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posters: state.posters
  }
}
export default connect(mapStateToProps, {
  fetchPosters
})(HomePage);
