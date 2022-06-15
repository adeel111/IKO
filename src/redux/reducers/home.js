import * as types from '../actions/types';

const initialState = {
  userName: 'JI',
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USERNAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    default:
      return state;
  }
};
