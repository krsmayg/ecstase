import {combineReducers} from 'redux';
import posterReducer from './postersReducer';
export default combineReducers({
    posters: posterReducer
});

