import {combineReducers} from 'redux';
import posterReducer from './postersReducer';
import collectionReducer from './collectionReducer';
import basketReducer from './basketReducer';
export default combineReducers({
    posters: posterReducer,
    collectionState: collectionReducer,
    basketState: basketReducer
});

