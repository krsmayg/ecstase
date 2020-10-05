import axiosData from '../api/axiosConfig';
import {FETCH_POSTERS, FETCH_COLLECIONS, FETCH_BASKET_NUMBER,SET_BASKET_NUMBER} from './actionTypes';

export const fetchPosters = () => async dispatch =>  {
    let data = [];
    await axiosData.get('/posters').then(res => {
        data = res.data.data.docs;
    });
    dispatch({type:FETCH_POSTERS, payload: data })
};

export const fetchCollections = () => async dispatch =>  {
    let data = [];
    await axiosData.get('/collections').then(res => {
        data = res.data.data.docs;
    });
    dispatch({type:FETCH_COLLECIONS, payload: data });
};

// export const fetchCollection = (id) => async dispatch =>  {
//     let data = [];
//     await axiosData.get('/collections').then(res => {
//         data = res.data.data.docs;
//     });
//     dispatch({type:FETCH_COLLECIONS, payload: data });
// };
export const fetchBasketNumber = () => async dispatch => {
    let counter = await localStorage.getItem('basketCounter');
    dispatch({type:FETCH_BASKET_NUMBER, payload: counter });
}

export const setBasketNumber = () => async dispatch => {
    let counter = await localStorage.getItem('basketCounter');
    counter++;
    await localStorage.setItem('basketCounter',counter);
    dispatch({type:SET_BASKET_NUMBER});
}