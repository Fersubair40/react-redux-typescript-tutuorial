import {applyMiddleware, compose, createStore} from "redux";
import rootReducre from "./rootReducre";
import reduxThunk from "redux-thunk";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancers = composeEnhancers(
  applyMiddleware(reduxThunk)
);

export const store = createStore(rootReducre, enhancers);
export type RootState = ReturnType<typeof store.getState>
export default store;


