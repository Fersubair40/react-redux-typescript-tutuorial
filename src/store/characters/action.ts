import axios from "axios";
import { Dispatch, Action } from "redux";
import charactersActionTypes from "./actionTypes";


export const getAllCharacters = () => async (dispatch: Dispatch<Action<any>>) => {
  dispatch({type: charactersActionTypes.GET_ALL.pending});
  const response = await axios
    .get("https://swapi.dev/api/people/")
    .catch((error) => {
      return error;
    });
  return dispatch({
    type: charactersActionTypes.GET_ALL.fulfilled,
    characters: response.data?.results,
  });
};
