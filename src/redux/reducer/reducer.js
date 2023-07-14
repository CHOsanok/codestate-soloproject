const initialState = {
  dogData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DOGS":
      return { ...state, dogData: action.payload };
    default:
      return state;
  }
};

export default reducer;