import React from "react";
import { useState } from "react";

import { Form } from "./components/Form";
import { ShowScreen } from "./components/ShowScreen";

export const PokemonApp = () => {
  const [field, setField] = useState("ability");
  const [name, setName] = useState("stench");

  return (
    <div className="flex">
      <Form field={field} setField={setField} setName={setName} />
      <ShowScreen field={field} name={name} />
    </div>
  );
};
