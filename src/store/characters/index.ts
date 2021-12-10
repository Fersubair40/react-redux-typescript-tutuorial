import charactersActionTypes from "./actionTypes";
import {Action, characterState} from "./types";

const initialState: characterState = {
  characters: [],
  loading: false,
  error: false,
};

export const characterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case charactersActionTypes.GET_ALL.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case charactersActionTypes.GET_ALL.fulfilled: {
      return {
        ...state,
        characters: action.characters,
        loading: false,
      };
    }
    case charactersActionTypes.GET_ALL.rejected: {
      return {
        ...state,
        characters: [],
        loading: false,
        error: false,
      };
    }
    default:
      return state;
  }
};
