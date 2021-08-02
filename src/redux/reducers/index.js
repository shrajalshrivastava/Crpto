import { combineReducers } from "redux";
import { coinReducer, selectedReducer } from "./coinReducer";

const reducers = combineReducers({
  allCoins: coinReducer,
  coin: selectedReducer,
});

export default reducers;
