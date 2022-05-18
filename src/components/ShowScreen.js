import { useEffect, useState } from "react";
import { getData } from "../services/getData";
import { Character } from "./Character";

export const ShowScreen = ({ field, name }) => {
  const [character, setCharacter] = useState({
    id: 0,
    name: "",
    pokemons: [],
  });

  useEffect(() => {
    getData(field, name).then((dat) => {
      setCharacter(dat);
    });
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
