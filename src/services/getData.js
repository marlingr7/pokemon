import Swal from "sweetalert2";

export const getData = async (field, name) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/${field}/${name}`);

    if (!res.ok) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There's no match results",
      });
    }

    const data = await res.json();

    if (name.includes("?")) {
      const result = data.results.map((res) => {
        return {
          value: res.name,
          label: res.name,
        };
      });
      return result;
    } else if (field === "pokemon") {
      return {
        id: data.id,
        imgUrl: data.sprites.front_default,
        baseExperience: data.base_experience,
        weight: data.weight,
        height: data.height,
        order: data.order,
      };
    } else {
      return {
        id: data.id,
        name: data.name,
        pokemons: data.pokemon,
      };
    }
  } catch (error) {
    return console.log(error);
  }
};
