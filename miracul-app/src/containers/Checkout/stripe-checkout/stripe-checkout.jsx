import React, { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import { fetchProductsBasket } from "../../../actions/index";
import axiosData from "../../../api/axiosConfig";

const StripeCheckout = ({ products }) => {
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  useEffect(() => {
    fetchProductsBasket();
  }, []);
  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = products.map((item) => {
      return {
        quantity: item.amount,
        price_data: {
          currency: "usd",
          unit_amount: item.price * 100, //amount is in cents
          product_data: {
            name: item.name,
            description: `Size ${item.size}. In stunningly detailed illustrative style, this artwork plays on a movement between cool and warm colors - all brought together harmoniously with clear lines and engaging context.`,
            images: [`http://localhost:9000/images/posters/${item.photo}`],
          },
        },
      };
    });
    console.log(line_items, email);
    const res = await axiosData.post("/bookings/checkout-session", 
       { line_items, customer_email: email },
    );
    const { sessionId } = res.data;
    console.log(res);
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleGuestCheckout} className="checkout">
      <div className="login-data__form__input-box">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}   
        />
      </div>
      <button className="basket-footer__checkout-btn" type="submit">
        Checkout
      </button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.basketState.products,
  };
};
export default connect(mapStateToProps, { fetchProductsBasket })(
  StripeCheckout
);
