import React, { useEffect } from 'react';
import IosClose from 'react-ionicons/lib/IosClose';
import {connect} from 'react-redux';
import {fetchProductsBasket} from '../../actions/index';
import ToogleBasketItem from './ToogleBasketItem/ToogleBasketItem';

const Basket = (props) => {
    const closeBasketHandler = () => {
        const doc = document.getElementById('basket-drawer');
        doc.classList.remove('visible');
        const overlayBasket = document.querySelector('.basket-overlay');
        overlayBasket.classList.remove('visible');
    };
    useEffect(() =>{
        props.fetchProductsBasket();
    }, []);
    const renderProducts = () => {
        if(props.basketState.products) {
           return props.basketState.products.map(product => {
                return(
                    <div key={product.id} className="basket-item">
                        <div className="basket-item__image-container">
                            <img src={`http://localhost:9000/images/posters/${product.photo}`}/>
                        </div>
                        <div className="basket-item__info">
                            <h2 className="basket-item__info__title">{product.name}</h2>
                            <div className="basket-item__info__meta-box">
                                <p>Size: {product.size}</p>
                                <p style={{color:'#6b6969'}}>${product.price}</p>
                            </div>
                            <ToogleBasketItem product={product} />
                        </div>
                    </div>
                )
            });
        }
    }
    return ( 
        <> 
            <div className="basket-overlay"></div>
            <div id="basket-drawer">
                <div className="basket-header">
                    <h3 className="basket-header__title">Cart</h3>
                    <IosClose fontSize="32px"style={{cursor: 'pointer'}} onClick ={closeBasketHandler}/>
                </div>
                <div className="basket-main">
                    {renderProducts()}
                </div>
            </div>
        </>
     );
}
 const mapStateToProps = state => {
     return {
         basketState: state.basketState
     }
 }
export default connect(mapStateToProps,{fetchProductsBasket})(Basket);