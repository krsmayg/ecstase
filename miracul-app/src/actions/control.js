import axiosData from "../api/axiosConfig";
import { CREATE_POSTER, DELETE_POSTER } from "./actionTypes";

export const createPoster = (data) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  try {
    const res = await axiosData.post("/posters/", data, config);
    console.log("data sent successfully", res);
  } catch (err) {
    console.log("Catched err", err.message);
  }

  // dispatch({ type: CREATE_POSTER, payload: data });
};

export const deletePoster = (id) => async (dispatch) => {
  try {
    await axiosData.delete(`/posters/${id}`);
    dispatch({type: DELETE_POSTER, payload: id});
  } catch (err) {
    console.log("Catched err", err.message);
  }

  // dispatch({ type: CREATE_POSTER, payload: data });
};