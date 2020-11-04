import {
  LOGIN_USER,
  SIGNUP_USER,
  SET_AUTH,
  GET_ME,
} from "../actions/actionTypes";
const initialState = {
  isLogin: false,
  userData: {},
  isRouterAuth: "pending",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        userData: action.payload.user,
      };
    case SIGNUP_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        userData: action.payload.user,
      };
    case SET_AUTH:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        isRouterAuth: action.payload.isRouterAuth,
      };
    case GET_ME:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        userData: action.payload.user,
      };
    default:
      return state;
  }
};
