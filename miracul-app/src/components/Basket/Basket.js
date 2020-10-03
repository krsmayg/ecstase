import React from 'react';
import IosClose from 'react-ionicons/lib/IosClose';

const Basket = () => {
    const closeBasketHandler = () => {
        const doc = document.getElementById('basket-drawer');
        doc.classList.remove('visible');

        const overlayBasket = document.querySelector('.basket-overlay');
        overlayBasket.classList.remove('visible');

    };
    return ( 
        <> 
            <div className="basket-overlay"></div>
            <div id="basket-drawer">
                <div className="basket-header" >
                    <h3 className="basket-header__title">Cart</h3>
                    <IosClose fontSize="32px"style={{cursor: 'pointer'}} onClick ={closeBasketHandler}/>
                </div>
                <div className="basket-main">
                    
                </div>
            </div>
        </>
     );
}
 
export default Basket;