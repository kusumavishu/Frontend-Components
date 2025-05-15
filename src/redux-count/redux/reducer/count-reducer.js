const initialState = {
  value: 0,
};

const CountValue = (state = initialState, action) => {
  switch (action.type) {
    case "INC_BY_1":
      return { ...state, value: action.value + 1 };
    case "INC_BY_2":
      return { ...state, value: action.value + 2 };
    case "INC_BY_5":
      return { ...state, value: action.value + 5 };
    case "DEC_BY_1":
      return { ...state, value: action.value - 1 };
    case "DEC_BY_2":
      return { ...state, value: action.value - 2 };
    case "DEC_BY_5":
      return { ...state, value: action.value - 5 };
    default:
      return state;
  }
};

export default CountValue;
