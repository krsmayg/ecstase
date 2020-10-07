import React from 'react';
import IosAdd from 'react-ionicons/lib/IosAdd';
import IosRemove from 'react-ionicons/lib/IosRemove';
import {connect} from 'react-redux';
import {addProductToBasket, setBasketNumber, decreaseProductInBasket, decreaseBasketNumber} from '../../../actions/index'
const ToogleBasketItem = (props) => {
    const countHandler = (sign) => {
        let storageData = JSON.parse(localStorage.getItem('productsInBasket'));
        let productCopy = {...props.product}
        if(sign === '+') {
            props.addProductToBasket(productCopy);
            props.setBasketNumber();
        }
        else if(sign === '-') {
            props.decreaseProductInBasket(productCopy);
            props.decreaseBasketNumber();
        }
    }
    return (
        <div className="basket-item__info__actions">
            <div className="basket-quantity-box">
                <IosAdd onClick={() => countHandler('+')} />
                <p>{props.product.amount}</p>
                <IosRemove onClick={() => countHandler('-')}/>
            </div>
            <div className="basket-remove-btn">remove</div>
        </div>
    );
}
 
export default connect(null, {addProductToBasket, setBasketNumber,decreaseProductInBasket, decreaseBasketNumber})(ToogleBasketItem);