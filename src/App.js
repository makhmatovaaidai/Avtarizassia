import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import SignIn from "./components/SignIn";

function App() {
  const [array, setArray] = useState([]);

  const getRequestUser = async () => {
    const response = await fetch(
      "https://redu-bd068-default-rtdb.firebaseio.com/aidai.json"
    );
    const result = await response.json();
    const users = [];
    for (const key in result) {
      users.push({
        email: result[key].email,
        password: result[key].password,
      });
    }
    setArray(users);
    console.log(result);
  };
  useEffect(() => {
    getRequestUser();
  }, []);

  return (
    <div className="App">
      <Form />
      <SignIn array={array} />
    </div>
  );
}

export default App;
