import axiosData from '../api/axiosConfig';
import {FETCH_POSTERS, FETCH_COLLECIONS} from './actionTypes';

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

export const fetchCollection = (id) => async dispatch =>  {
    let data = [];
    await axiosData.get('/collections').then(res => {
        data = res.data.data.docs;
    });
    dispatch({type:FETCH_COLLECIONS, payload: data });
};
