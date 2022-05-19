import { types } from "../types/types";
import { getData } from "../services/getData";

export const resolveGetData = (field, name) => {
  return (dispatch) => {
    getData(field, name).then((dat) => {
      if (name.includes("?")) {
        dispatch(allFields(dat));
      } else {
        dispatch(byField(dat));
      }
    });
  };
};

export const allFields = (data) => ({
  type: types.allFields,
  payload: { data: data.results },
});

export const byField = (data) => ({
  type: types.byField,
  payload: {
    id: data.id,
    name: data.name,
    pokemons: data.pokemon,
  },
});
