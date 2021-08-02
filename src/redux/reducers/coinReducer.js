import { ActionTypes } from "../contants/action-types";

const initialCoinState = {
  coins: [],
};

export const coinReducer = (state = initialCoinState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COINS:
      return { ...state, coins: payload };
    default:
      return state;
  }
};

export const selectedReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_COIN:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_COIN:
      return {};
    default:
      return state;
  }
};
