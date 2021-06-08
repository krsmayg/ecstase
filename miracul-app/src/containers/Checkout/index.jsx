import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import { fetchProductsBasket } from "../../actions/index";
import StripeCheckout from "./stripe-checkout/stripe-checkout";
const Checkout = ({ basketState, fetchProductsBasket }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchProductsBasket();
    handlePrice();
  }, []);
  useEffect(() => {
    handlePrice();
  });
  const handlePrice = () => {
    if (basketState.products) {
      let totalP = basketState.products.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0);
      setTotalPrice(totalP);
       console.log("totalPrice in checkout: ", totalPrice);
    }
  };
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total items ${basketState.basketCounter}`}</h3>
        <h3>{`Amount to pay $${totalPrice}`}</h3>
        <StripeCheckout />
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    basketState: state.basketState,
  };
};
export default connect(mapStateToProps, { fetchProductsBasket })(Checkout);
