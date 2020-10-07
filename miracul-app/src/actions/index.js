import axiosData from '../api/axiosConfig';
import {
       FETCH_POSTERS, FETCH_COLLECIONS,
       FETCH_BASKET_NUMBER,SET_BASKET_NUMBER,
       ADD_PRODUCT_TO_BASKET,
       FETCH_PRODUCTS_IN_BASKET,
       DECREASE_BASKET_NUMBER,
       DECREASE_PRODUCTAMOUNT_IN_BASKET} from './actionTypes';

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
export const fetchBasketNumber = () =>  dispatch => {
    let counter =  localStorage.getItem('basketCounter');
    dispatch({type:FETCH_BASKET_NUMBER, payload: counter });
}

export const setBasketNumber = () =>  dispatch => {
    let counter =  localStorage.getItem('basketCounter');
    counter++;
    localStorage.setItem('basketCounter',counter);
    dispatch({type:SET_BASKET_NUMBER});
}
export const decreaseBasketNumber = (number) => dispatch => {
    let counter = localStorage.getItem('basketCounter');
    number ? counter -= number : counter--;
    localStorage.setItem('basketCounter',counter);
    dispatch({type:DECREASE_BASKET_NUMBER, payload: counter});
};
export const addProductToBasket = (product) => dispatch =>{
    let arr= JSON.parse(localStorage.getItem('productsInBasket'));
    let filteredProduct = arr.find(el => el.id === product.id);
    filteredProduct ? filteredProduct.amount++ : arr.push(product);
    localStorage.setItem('productsInBasket', JSON.stringify(arr));
    dispatch({type:ADD_PRODUCT_TO_BASKET, payload: arr })
}
export const decreaseProductInBasket = (product) => dispatch =>{
    let arr = JSON.parse(localStorage.getItem('productsInBasket'));
    let filteredProduct = arr.find(el => el.id === product.id);
    if(filteredProduct.amount === 1 && arr.length > 1) {
        let newArr = arr.filter(el => el.id !== product.id);
        console.log("I am a first viariont,shoul be deleted 1 product ", newArr);
        localStorage.setItem('productsInBasket', JSON.stringify(newArr));
        dispatch({type:DECREASE_PRODUCTAMOUNT_IN_BASKET, payload: newArr });
    }
    else if(filteredProduct.amount === 1 && arr.length === 1) {
        console.log("I am a second viariont,basket should be empty ");
        localStorage.setItem('productsInBasket', JSON.stringify([]));
        dispatch({type:DECREASE_PRODUCTAMOUNT_IN_BASKET, payload: [] });
    }
    else {
        console.log(('I am a third variant'));
        filteredProduct.amount--;
        console.log(arr);
        localStorage.setItem('productsInBasket', JSON.stringify(arr));
        dispatch({type:DECREASE_PRODUCTAMOUNT_IN_BASKET, payload: arr })
    }
}

export const fetchProductsBasket = () => dispatch =>{
    let arr= JSON.parse(localStorage.getItem('productsInBasket'));
    dispatch({type:FETCH_PRODUCTS_IN_BASKET, payload: arr });
}

export const removeProductFromBasket = (product) =>  dispatch => {
    let arr = JSON.parse(localStorage.getItem('productsInBasket'));
    let newArr = arr.filter(el => el.id !== product.id);
    localStorage.setItem('productsInBasket', JSON.stringify(newArr));
    dispatch({type:DECREASE_PRODUCTAMOUNT_IN_BASKET, payload: newArr });
} 