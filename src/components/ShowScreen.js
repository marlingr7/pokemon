import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resolveGetData } from "../actions/actions";
import { Character } from "./Character";

export const ShowScreen = ({ field, name }) => {

  const dispatch = useDispatch();

  const character = useSelector((state) => state.getData.allField);

  useEffect(() => {
    dispatch(resolveGetData(field, name));
  }, [name]);

  return (
    <div className="showScreen">
      <h3>
        Pokemons with {field.toUpperCase()}: "{name}"
      </h3>

      <div className="characterContainer ">
        {character.pokemons.map((item) => (
          <Character key={item.pokemon.url} character={item.pokemon} />
          
        ))}
      </div>
    </div>
  );
};
