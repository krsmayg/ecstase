import React from 'react';
import Logo from '../../components/Navigation/Logo/Logo';
// import './Footer.css'

const footer = (props) => (
  <div className="footer">
    <div className="inner_footer">
      <div className="logo_container">
        <Logo link="/"/>
      </div>
      <div className="footer_list"> 
        <h1>Need help?</h1>
        <a href="/">Terms &amp; Conditions</a>
        <a href="/">Privacy Policy</a>
      </div>
      <div className="footer_list"> 
        <h1>More</h1>
        <a href="/">Broucheres</a>
        <a href="/">Donate</a>
        <a href="/">Governance</a>
        <a href="/">Impact Reports</a>
      </div>
      <div className="footer_list"> 
        <h1>Follow us</h1>
        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
      </div>
    </div>
  </div>  
);

export default footer;