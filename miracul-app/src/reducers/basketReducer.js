import {FETCH_BASKET_NUMBER, SET_BASKET_NUMBER} from '../actions/actionTypes';
import logo from '../components/Navigation/Logo/Logo';
const initialState = {
    basketCounter: 0
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
        default: return state
    }
};