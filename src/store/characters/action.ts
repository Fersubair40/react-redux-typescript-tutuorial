import axios from "axios";
import {Dispatch, Action} from "redux";
import charactersActionTypes from "./actionTypes";

export const getAllCharacters =
  () => async (dispatch: Dispatch<Action<any>>) => {
    dispatch({type: charactersActionTypes.GET_ALL.pending});
    await axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        dispatch({
          type: charactersActionTypes.GET_ALL.fulfilled,
          characters: response.data?.results,
        });
      })
      .catch((error) => {
        return error;
      });
  };
