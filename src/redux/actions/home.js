import * as types from '../actions/types';

export const handleUpdateUserName = params => ({
  type: types.SAVE_USERNAME,
  payload: params,
});
