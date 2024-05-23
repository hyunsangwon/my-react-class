import React, { useState } from "react";

export const Search = ({ searchEmp, init }) => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("name");

  const options = ["name", "dname"];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      searchEmp(selectedValue, value);
      setValue("");
    }
  };
  return (
    <div className="sarchArea">
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => setSelectedValue(e.target.value)}
          options={options}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search..."
        />
        <button type="submit">Search</button>
        <button type="button" onClick={() => init()}>
          Refrash
        </button>
      </form>
    </div>
  );
};
