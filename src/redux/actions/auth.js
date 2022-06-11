import * as types from './types';

export const saveQuickAccess = data => {
  return {
    type: types.SAVE_QUICK_ACCESS,
    payload: data,
  };
};

export const resetQuickAccess = () => {
  return {
    type: types.RESET_QUICK_ACCESS,
  };
};

export const callapi = data => {
  return {
    type: types.CALL_API,
    payload: data,
  };
};

export const stopapi = () => {
  return {
    type: types.STOP_API,
  };
};
