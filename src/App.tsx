import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";

import GlobalStoreResponse from "./typings";
import {getAllCharacters} from "./store/characters/action";

function App() {
  const dispatch = useDispatch();
  const {characters, loading} = useSelector(
    (state: GlobalStoreResponse) => state.characters
  );

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <div> loading ........ </div>}
      {characters &&
        characters.map((character) => {
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
