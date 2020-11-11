import { FETCH_POSTERS, DELETE_POSTER } from "../actions/actionTypes";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTERS:
      return action.payload;
    case DELETE_POSTER:
        let deleteState = [...state];
        console.log(state);
        deleteState = deleteState.filter(item => item._id !== action.payload)
        return {
          posters: deleteState
        }
    default:
      return state;
  }
};
