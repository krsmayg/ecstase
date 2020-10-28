import axiosData from "../api/axiosConfig";
import Cookies from "universal-cookie";
import { LOGIN_USER, SIGNUP_USER, SET_AUTH } from "./actionTypes";
export const loginUser = (userData) => async (dispatch) => {
  let dataResponse = {};
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
    payload: { user: dataResponse.data.user, isLogin: true },
  });
  return res;
};

export const signupUser = (userData) => async (dispatch) => {
  let dataResponse = {};
  console.log("hello from sign up", userData);
  await axiosData.post("/users/signup", { ...userData }).then((res) => {
    dataResponse = res.data;
    const cookies = new Cookies();
    cookies.set("jwt", res.data.token);
  });
  dispatch({
    type: SIGNUP_USER,
    payload: { user: dataResponse.data.user, isLogin: true },
  });
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
