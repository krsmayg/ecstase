import React from 'react';
import IosAdd from 'react-ionicons/lib/IosAdd';
import IosRemove from 'react-ionicons/lib/IosRemove';

const ToogleBasketItem = (props) => {
    return (
        <div className="basket-item__info__actions">
            <div className="basket-quantity-box">
                <IosAdd />
                <p>{props.product.amount}</p>
                <IosRemove/>
            </div>
            <div className="basket-remove-btn">remove</div>
        </div>
    );
}
 
export default ToogleBasketItem;