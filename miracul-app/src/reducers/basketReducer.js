import {ADD_PRODUCT_TO_BASKET, 
    DECREASE_BASKET_NUMBER,
    FETCH_BASKET_NUMBER,
    FETCH_PRODUCTS_IN_BASKET, 
    SET_BASKET_NUMBER,
    DECREASE_PRODUCTAMOUNT_IN_BASKET} from '../actions/actionTypes';
import logo from '../components/Navigation/Logo/Logo';
const initialState = {
    basketCounter: 0,
    products: []
};

export default(state = initialState, action) => {
    switch(action.type) {
        case FETCH_BASKET_NUMBER:
            return {
                ...state,
                basketCounter: action.payload
            }
        case SET_BASKET_NUMBER: 
            console.log('hello from SET_REDUCER');
            let counter = state.basketCounter * 1;
            let newCounter = counter + 1;
            return {
                ...state,
                basketCounter: newCounter
            }
        case DECREASE_BASKET_NUMBER: 
            return {
                ...state,
                basketCounter: action.payload
            }
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                products: action.payload
            }
        case DECREASE_PRODUCTAMOUNT_IN_BASKET:
            return {
                ...state,
                products: action.payload
            }
        
        case FETCH_PRODUCTS_IN_BASKET: 
            return {
                ...state,
                products: action.payload
            }
        default: return state
    }
};