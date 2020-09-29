import {FETCH_COLLECIONS, FETCH_COLLECION} from '../actions/actionTypes';
const initialState = {
    collections: [],
    collection: {}
};
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COLLECIONS: 
            return {
                ...state,
                collections: action.payload
            }
        case FETCH_COLLECION: 
            return {
                ...state,
                collection: action.payload
            }
        default: return state;
    }
};