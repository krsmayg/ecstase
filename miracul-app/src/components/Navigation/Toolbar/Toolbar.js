import React, { useState, useEffect } from "react";
// import './Toolbar.css'
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../Logo/Logo";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";
import IosCartOutline from "react-ionicons/lib/IosCartOutline";
import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
import { fetchPosters, fetchBasketNumber } from "../../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Basket from "../../Basket/Basket";

const Toolbar = React.memo((props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInputVisibility, setSearchInputVisibility] = useState(false);
  const [searchValue, setSearhValue] = useState("");
  useEffect(() => {
    if (localStorage.getItem("basketCounter") === null) {
      localStorage.setItem("basketCounter", 0);
      localStorage.setItem("productsInBasket", JSON.stringify([]));
    } else {
      props.fetchBasketNumber();
    }
  }, []);

  const handleInputOnChange = (event) => {
    setSearhValue(event.target.value);
    console.log(searchValue);
  };
  const goToPosterPage = (slug) => {
    const queryParams =
      encodeURIComponent("artwork") + "=" + encodeURIComponent(slug);
    console.log(slug);
    console.log(props.history);
    props.history.push({
      pathname: "/wallshop",
      search: "?" + queryParams,
    });
  };
  const searchPostersAndRender = () => {
    if (props.posters) {
      const filteredPosters = props.posters.filter((poster) => {
        return poster.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      if (searchValue === "") return null;

      return (
        <div
          className="right-nav__searhed-list"
          hidden={!searchInputVisibility}
        >
          <div className="right-nav__searhed-list__list-info">
            <span>{`${filteredPosters.length} product found`}</span>
          </div>
          {filteredPosters.map((poster) => (
            <div
              className="right-nav__searhed-list__item-container"
              onClick={() => goToPosterPage(poster.slug)}
            >
              <img
                src={`http://localhost:9000/images/posters/${poster.imageWall}`}
                width="60"
                height="80"
              />
              <div className="right-nav__searhed-list__item-container__info-box">
                <span className="right-nav__searhed-list__item-container__info-box__title">
                  {poster.name}
                </span>
                <span className="right-nav__searhed-list__item-container__info-box__subTitle">
                  <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
                    {poster.totalAmountLeft}
                  </span>{" "}
                  / {poster.totalAmountOf} left{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return <p>Loading...</p>;
  };

  const burgerBtnHandler = () => {
    let btn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu-nav");
    if (!menuOpen) {
      btn.classList.add("open");
      menu.classList.add("toogled");
      setMenuOpen(true);
    } else {
      btn.classList.remove("open");
      menu.classList.remove("toogled");

      setMenuOpen(false);
    }
  };
  const basketHandler = () => {
    const doc = document.getElementById("basket-drawer");
    const overlayBasket = document.querySelector(".basket-overlay");
    doc.classList.add("visible");
    overlayBasket.classList.add("visible");
    document.body.classList.add("no-scroll");
  };
  return (
    <header className="toolbar">
      <div className="menu-btn" onClick={burgerBtnHandler}>
        <div className="menu-btn__burger"></div>
      </div>
      <Logo color="black" link="/" />
      <nav className="menu-nav">
        <NavigationItems />
      </nav>
      <div className="right-nav">
        <IosCartOutline
          onClick={basketHandler}
          fontSize="34px"
          className="toolbar--cart"
        />
        <div className="toolbar--counter">
          <span>{props.basketCounter.basketCounter}</span>
        </div>
        <IosSearchOutline
          onClick={() => setSearchInputVisibility(!searchInputVisibility)}
          fontSize="34px"
          className="toolbar--search"
        />
        {searchInputVisibility ? (
          <input
            className="right-nav__input"
            onChange={handleInputOnChange}
          ></input>
        ) : null}
        {searchPostersAndRender()}
      </div>
      <Basket />
    </header>
  );
});

const mapStateToProps = (state) => {
  return {
    posters: state.posters,
    basketCounter: state.basketState,
  };
};
export default connect(mapStateToProps, { fetchPosters, fetchBasketNumber })(
  withRouter(Toolbar)
);
