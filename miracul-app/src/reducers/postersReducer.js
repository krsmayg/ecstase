import {FETCH_POSTERS} from '../actions/actionTypes';
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_POSTERS: 
            return action.payload;
        default: return state;
    }
}
