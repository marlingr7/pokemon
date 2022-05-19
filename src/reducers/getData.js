import { types } from "../types/types";

const initialState = {
  options: [{ value: "", label: "" }],
  allField: { id: "", name: "", pokemons: [] },
};

export const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.allFields:
      return {
        ...state,
        options: action.payload.data.map((res) => {
          return {
            value: res.name,
            label: res.name,
          };
        }),
      };

    case types.byField:
      return {
        ...state,
        allField: {
          id: action.payload.id,
          name: action.payload.name,
          pokemons: action.payload.pokemons,
        },
      };

    default:
      return state;
  }
};
