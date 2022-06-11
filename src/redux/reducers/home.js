import * as types from '../actions/types';

const initialState = {
  screenFocused: 'HomeStack',
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTIVE_SCREEN: {
      return {
        ...state,
        screenFocused: action.payload,
      };
    }
    default:
      return state;
  }
};
