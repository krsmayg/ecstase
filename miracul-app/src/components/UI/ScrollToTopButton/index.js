import React, { useState } from "react";
import IosArrowDropupCircle from "react-ionicons/lib/IosArrowDropupCircle";

import classes from "./style.module.scss";
const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return <IosArrowDropupCircle className={classes.scrollTop} onClick={scrollTop}   />
 
};

export default ScrollToTopButton;
