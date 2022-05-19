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
    return data;
  } catch (error) {
    return console.log(error);
  }
};
