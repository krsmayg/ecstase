import React, { Component, Fragment } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/UI/ScrollToTopButton";
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <div className="main-container">
          <div className="main-container-content">{this.props.children}</div>
        </div>
        <ScrollToTopButton />
        <Footer />
      </Fragment>
    );
  }
}
export default Layout;
