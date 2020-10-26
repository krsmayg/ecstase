import {LOGIN_USER, SIGNUP_USER} from '../actions/actionTypes';
export default (state={}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        userData: action.payload.user
      }
    case SIGNUP_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        userData: action.payload.user
      }
    default: return state
  }
};