import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const result = `Hi ${name} ${surname}`;
    alert(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={e => {
            setSurname(e.target.value);
          }}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
