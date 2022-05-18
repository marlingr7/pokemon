import { useEffect, useState } from "react";
import Select from "react-select";

import { getData } from "../services/getData";

export const Form = ({ field, setField, setName }) => {
  const [data, setData] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    getData(field, "?limit=1200").then((dat) => {
      setData(dat);
    });
  }, [field]);

  const fieldOptions = [
    { value: "type", label: "Type" },
    { value: "ability", label: "Ability" },
  ];

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
