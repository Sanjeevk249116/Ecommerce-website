import { GET_DATA_SUCCESS } from "./actionType";

const listStates = {
  productData: [],
};

function reducer(state = listStates, { type, payload }) {
  switch (type) {
    case GET_DATA_SUCCESS:
      return { ...state, productData: payload };
 
    default:
      return state;
  }
}

export default reducer;
