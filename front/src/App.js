import logo from "./logo.svg";
import "./App.css";
import { db } from "./axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [text, setText] = useState();

  const add = async () => {
    try {
      await db.post(`/add/${text}`);
      alert("Data inserted successfuly into DataBase");
      setText();
    } catch (e) {
      console.log("THERE IS A PROBLEM", e);
    }
  };
  const get = async () => {
    try {
      const result = await db.get(`/`);
      console.log("This is result", result.data[result.data.length - 1].name);
      setName(result.data[result.data.length - 1].name);
    } catch (e) {
      console.log("THERE IS A PROBLEM", e);
    }
  };
  return (
    <div
      style={{
        borderWidth: 20,
        borderColor: "black",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "gray",
        }}
      >
        <form
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          <label>Enter your name::</label>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setText(e.target.value);
            }}
          />
        </form>
        <div>
          <button onClick={() => add(text)}>Add to DB</button>
          <button onClick={get}>Get from DB</button>
        </div>
        {name && "Hello " + name}
      </div>
    </div>
  );
}

export default App;
