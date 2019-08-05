// import{ apartments } from '../data/apartments'

export const initialState = {
  prints: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_APTID":
      return {
        ...state,
        apartmentId: action.payload
      };
    default:
      return state;
  }
};