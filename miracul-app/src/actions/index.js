import axiosData from '../api/axiosConfig';
import {FETCH_POSTERS} from './actionTypes';
export const fetchPosters = () => async dispatch =>  {
    let data = [];
    await axiosData.get('/posters').then(res => {
        data = res.data.data.docs;
    });
    dispatch({type:FETCH_POSTERS, payload: data })
};

