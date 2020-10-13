import { Component, Fragment, PureComponent } from "react";
import React from "react";
import axios from "axios";
import PosterImageList from "../../components/Poster/PosterImageList/PosterImageList";
import PosterDescription from "../../components/Poster/PosterDescription/PosterDescription";
import TitleText from "../../components/Text/TitleText/TitleText";
import ShopPageInfo from "../../components/ShopPageInfo/ShopPageInfo";
import WallCollections from "../../components/WallCollections/WallCollections";
import Spinner from "../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setBasketNumber, addProductToBasket } from "../../actions/index";
import { v5 as uuidv5 } from "uuid";
import axiosConfig from "../../api/axiosConfig";

class ShopPage extends PureComponent {
  state = {
    poster: null,
    price: 250,
    size: "L",
    amountInfo: ''
  };
  posterPriceHandler = (e, id) => {
    const prices = [
      this.state.poster.price,
      this.state.poster.price - 10,
      this.state.poster.price - 20,
    ];
    const size = e.target.textContent;
    switch (size) {
      case "L":
        this.setState({ price: prices[0] });
        this.setState({ size: "L" });
        break;
      case "M":
        this.setState({ price: prices[1] });
        this.setState({ size: "M" });
        break;
      case "S":
        this.setState({ price: prices[2] });
        this.setState({ size: "S" });
        break;
      default:
        this.setState({ price: this.state.poster.price });
        break;
    }
    this.state.poster.amountArray.forEach(el => {
      if(el.name === this.state.size) {
        this.setState({amountInfo: `${el.current}/${el.of} left`})
      }
    })
    document
      .querySelectorAll(".product-info-size-link")
      .forEach((el) => el.classList.remove("active"));
    let el = document.getElementById(id);
    el.classList.add("active");
  };
  addtoBasketHandler = () => {
    this.props.setBasketNumber();
    const key = uuidv5(
      `${this.state.poster.name} ${this.state.price} ${this.state.size}}`,
      uuidv5.DNS
    ).split("-")[4];
    // if(this.state.poster) {}
    const posterDelievery = {
      id: key,
      price: this.state.price,
      size: this.state.size,
      name: this.state.poster.name,
      photo: this.state.poster.images[0],
      amount: 1,
    };
    this.props.addProductToBasket(posterDelievery);
    console.log(posterDelievery);
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location != prevProps.location) {
      const query = this.props.location.search;
      const slug = query.split("=")[1];
      console.log(slug);
      axiosConfig
        .get(`/posters/poster/${slug}`)
        .then((res) => {
          const poster = { ...res.data.data.poster };
          if (poster) {
            this.setState({ poster });
            this.setState({ price: poster.price });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  componentDidMount() {
    const query = this.props.location.search;
    const slug = query.split("=")[1];
    console.log(slug);
    axiosConfig
      .get(`/posters/poster/${slug}`)
      .then((res) => {
        const poster = { ...res.data.data.poster };
        if (poster) {
          this.setState({ poster });
          this.setState({ price: poster.price });

          // console.log(this.state.poster.images);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let postersImages = null;
    let posterDescription = null;
    if (this.state.poster) {
      postersImages = <PosterImageList images={this.state.poster.images} />;
      posterDescription = (
        <PosterDescription
          price={this.state.price}
          title={this.state.poster.name}
          description={this.state.poster.description}
          priceHandler={this.posterPriceHandler}
          addtoBasket={this.addtoBasketHandler}
          sizes={this.state.poster.amountArray}
          amountInfo={this.state.amountInfo}
        />
      );
    } else {
      postersImages = <Spinner />;
    }
    return (
      <Fragment>
        <div id="shop-slider">
          <WallCollections />
        </div>
        <div className="shop-page-container">
          {posterDescription}
          {postersImages}
        </div>
        <ShopPageInfo />
      </Fragment>
    );
  }
}
export default connect(null, { setBasketNumber, addProductToBasket })(
  withRouter(ShopPage)
);
