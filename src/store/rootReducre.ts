import {combineReducers} from "redux";
import {characterReducer} from "./characters";

export default combineReducers({
  characters: characterReducer,
});
