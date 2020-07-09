import React from 'react'
const shopPageContext = React.createContext({
  posterSlug: null,
  goToShopPage: () => {}
});
export default shopPageContext;