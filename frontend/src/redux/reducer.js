import { GET_DATA_SUCCESS, POST_ITEMS_SUCCESS } from "./actionType";

const listStates = {
  productData: [],
};

function reducer(state = listStates, { type, payload }) {
  switch (type) {
    case GET_DATA_SUCCESS:
      return { ...state, productData: payload };
    case POST_ITEMS_SUCCESS:
      return { ...state};
    
    default:
      return state;
  }
}

export default reducer;
