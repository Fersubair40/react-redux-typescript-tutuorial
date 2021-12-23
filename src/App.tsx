import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";


import {getAllCharacters} from "./store/characters/action";
import { RootState } from "./store";

function App() {
  const dispatch = useDispatch();
  const {characters, loading, error} = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <div> loading ........ </div>}
      {error && <div> Error </div>}
      {characters &&
        characters?.map((character) => {
          return (
            <span key={character.name} className="name">
              {character.name}
            </span>
          );
        })}
    </div>
  );
}

export default App;
