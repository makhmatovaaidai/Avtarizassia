import React from "react";
import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ password: "", email: "" });
  const onUserData = async () => {
    await fetch("https://redu-bd068-default-rtdb.firebaseio.com/aidai.json",{
      method: "POST", 
      body: JSON.stringify(values),
    });
  };
  return (
    <div>
      <h1>Sign up</h1>
      <input
        type="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <input
        type="passwort"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <button onClick={onUserData}>Add</button>
    </div>
  );
};

export default Form;
