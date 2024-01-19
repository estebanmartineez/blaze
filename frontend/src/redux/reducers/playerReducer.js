const initialState = {
  players: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return {...state, players: action.payload};
    default:
      return state;
  }
};

export default playerReducer;
