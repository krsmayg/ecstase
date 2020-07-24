import React from 'react'
// import './Logo.css'
const logo = (props) => (
  <a href= {props.link} id="logo-link">
   <img alt="Logo" 
   src={ props.color === "black" ? "https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/logo.svg?v=187072955679511156" : "https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/logo-white.svg?v=16773109999633320399" }
   width="86px" 
   className="logo"/>
  </a>
)
export default logo;