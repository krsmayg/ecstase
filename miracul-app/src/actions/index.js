import axiosData from '../api/axiosConfig';
import {
       FETCH_POSTERS, FETCH_COLLECIONS,
       FETCH_BASKET_NUMBER,SET_BASKET_NUMBER,
       ADD_PRODUCT_TO_BASKET,
       FETCH_PRODUCTS_IN_BASKET} from './actionTypes';

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

export const addProductToBasket = (product) => dispatch =>{
    let arr= JSON.parse(localStorage.getItem('productsInBasket'));
    let filteredProduct = arr.find(el => el.id === product.id);
    filteredProduct ? filteredProduct.amount++ : arr.push(product);
    localStorage.setItem('productsInBasket', JSON.stringify(arr));
    dispatch({type:ADD_PRODUCT_TO_BASKET, payload: arr })
}

export const fetchProductsBasket = () => dispatch =>{
    let arr= JSON.parse(localStorage.getItem('productsInBasket'));
    dispatch({type:FETCH_PRODUCTS_IN_BASKET, payload: arr });
}