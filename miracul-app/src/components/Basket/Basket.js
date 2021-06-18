import React, { useEffect, useState } from "react";
import IosClose from "react-ionicons/lib/IosClose";
import { connect } from "react-redux";
import { fetchProductsBasket } from "../../actions/index";
import ToogleBasketItem from "./ToogleBasketItem/ToogleBasketItem";
import { withRouter } from 'react-router-dom';

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Basket = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const closeBasketHandler = () => {
    const doc = document.getElementById("basket-drawer");
    doc.classList.remove("visible");
    const overlayBasket = document.querySelector(".basket-overlay");
    overlayBasket.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  };
  useEffect(() => {
    props.fetchProductsBasket();
    handlePrice();
  }, []);
  useEffect(() => {
    handlePrice();
  });
  const handlePrice = () => {
    if (props.basketState.products) {
      let totalP = props.basketState.products.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0);
      setTotalPrice(totalP);
      console.log("totalPrice: ", totalPrice);
    }
  };
  const renderProducts = () => {
    if (props.basketState.products) {
      return props.basketState.products.map((product) => {
        return (
          <div key={product.id} className="basket-item">
            <div className="basket-item__image-container">
              <img
                src={`http://localhost:9000/images/posters/${product.photo}`}
              />
            </div>
            <div className="basket-item__info">
              <h2 className="basket-item__info__title">{product.name}</h2>
              <div className="basket-item__info__meta-box">
                <p>Size: {product.size}</p>
                <p style={{ color: "#6b6969" }}>${product.price}</p>
                <p>{product.id}</p>
              </div>
              <ToogleBasketItem product={product} />
            </div>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className="basket-overlay"></div>
      <div id="basket-drawer">
        <div className="basket-header">
          <h3 className="basket-header__title">Cart</h3>
          <IosClose
            fontSize="32px"
            style={{ cursor: "pointer" }}
            onClick={closeBasketHandler}
          />
        </div>
        <div className="basket-main">{renderProducts()}</div>
        <div className="basket-footer">
          <div className="basket-footer__checkout-btn" onClick={() => props.history.push('/checkout')}>
            Checkout &middot; ${totalPrice}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    basketState: state.basketState,
  };
};
export default withRouter(connect(mapStateToProps, { fetchProductsBasket })(Basket));
