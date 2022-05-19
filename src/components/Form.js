import { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import { resolveGetData } from "../actions/actions";

export const Form = ({ field, setField, setName }) => {
  const [disabled, setDisabled] = useState(true);

  const fieldOptions = [
    { value: "type", label: "Type" },
    { value: "ability", label: "Ability" },
  ];

  const dispatch = useDispatch();

  const data = useSelector((state) => state.getData.options);

  useEffect(() => {
    dispatch(resolveGetData(field, "?limit=1200"));
  }, [field]);

  const handleFieldChange = (e) => {
    setField(e.value);
    setDisabled(false);
  };

  const handleDataChange = (e) => {
    setName(e.value);
  };

  return (
    <div className="form">
      <label className="label">Select a field for the search</label>
      <Select
        theme={(theme) => ({
          ...theme,
          heigth: 40,
          colors: {
            ...theme.colors,
            primary25: "#fff8ae",
            primary: "#ff9600",
          },
        })}
        options={fieldOptions}
        onChange={handleFieldChange}
      />
      <br />
      <label className="label">Select the {field} </label>
      <Select
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#fff8ae",
            primary: "#ff9600",
          },
        })}
        isDisabled={disabled}
        options={data}
        onChange={handleDataChange}
      />
    </div>
  );
};
