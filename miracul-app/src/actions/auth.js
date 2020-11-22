import axiosData from "../api/axiosConfig";
import Cookies from "universal-cookie";
import { LOGIN_USER, SIGNUP_USER, SET_AUTH, GET_ME } from "./actionTypes";
export const loginUser = (userData) => async (dispatch) => {
  let dataResponse = {};
  try {
    const res = await axiosData.post("/users/login", {
      email: userData.email,
      password: userData.password,
    });
    dataResponse = res.data;
    console.log(res.data);
    const cookies = new Cookies();
    cookies.set("jwt", res.data.token);
    dispatch({
      type: LOGIN_USER,
      payload: { user: dataResponse.data.user, isLogin: true, isRouterAuth: "done" },
    });
    return res;
  }catch (err) {
    return err;
  }

};

export const signupUser = (userData) => async (dispatch) => {
  let dataResponse = {};
  try {
    const res = await axiosData.post("/users/signup", { ...userData });
    dataResponse = res.data;
    const cookies = new Cookies();
    cookies.set("jwt", res.data.token);
    dispatch({
      type: SIGNUP_USER,
      payload: { user: dataResponse.data.user, isLogin: true, isRouterAuth: "done" },
    });
    return res;
  }catch (err){
    return err;
  }

};

export const setAuth = () => async (dispatch) => {
  const jwt = new Cookies().get("jwt");
  jwt !== undefined
    ? dispatch({
        type: SET_AUTH,
        payload: { isLogin: true, isRouterAuth: "done" },
      })
    : dispatch({
        type: SET_AUTH,
        payload: { isLogin: false, isRouterAuth: "failed" },
      });
};

export const getMe = () => async (dispatch) => {
  const jwt = new Cookies().get("jwt");
  let dataResponse = {};
  try {
    const res = await axiosData.get("/users/me", {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    dataResponse = await res.data.data;
    console.log(dataResponse);
    dispatch({
      type: GET_ME,
      payload: { user: dataResponse.doc, isLogin: true },
    });
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  new Cookies().remove("jwt");
  dispatch({
    type: SET_AUTH,
    payload: { isLogin: false, isRouterAuth: "pending" },
  });
  return "logout";
};
