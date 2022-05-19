import React from "react";
import { useState } from "react";
import { Provider } from "react-redux";

import { Form } from "./components/Form";
import { ShowScreen } from "./components/ShowScreen";
import { store } from './store/store';

export const PokemonApp = () => {
  const [field, setField] = useState("ability");
  const [name, setName] = useState("stench");

  return (
    <Provider store={store}>
      <div className="flex">
        <Form field={field} setField={setField} setName={setName} />
        <ShowScreen field={field} name={name} />
      </div>
    </Provider>
  );
};
