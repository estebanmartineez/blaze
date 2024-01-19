const initialState = {
  matches: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MATCHES':
      return {...state, matches: action.payload};
    default:
      return state;
  }
};

export default matchReducer;
