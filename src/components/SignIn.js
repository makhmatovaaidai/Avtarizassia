import React, { useState } from "react";

const SignIn = ({ array }) => {
  const [values, setValues] = useState({ password: "", email: "" });

  const signInHandler = () => {
    array.map((item) => {
      if (item.email === values.email) {
        return alert("Мындай адам катталган");
      }
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <input
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />

      <button onClick={signInHandler}>Add</button>
    </div>
  );
};

export default SignIn;
