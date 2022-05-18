import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getData } from "../services/getData";

export const Character = ({ character }) => {
  const { name, url } = character;

  const [pokemon, setPokemon] = useState({
    id: 0,
    imgUrl: "",
    baseExperience: 0,
    weight: 0,
    height: 0,
    order: 0,
  });

  useEffect(() => {
    getData("pokemon", name).then((dat) => {
      setPokemon(dat);
    });
  }, [url]);

  const onClick = (e) => {
    Swal.fire({
      title: name,
      html: `Order: ${pokemon.order} <br>
        Weight: ${pokemon.weight} <br>
        Height: ${pokemon.height} <br>
        Base Expereince: ${pokemon.baseExperience}`,
      imageUrl: pokemon.imgUrl,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  return (
    <div className="character animate__animated animate__zoomIn">
      <img onClick={onClick} src={pokemon.imgUrl} alt={name} />
      <p>{name.toUpperCase()}</p>
    </div>
  );
};
