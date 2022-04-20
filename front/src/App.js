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
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <label style={{ fontSize: 40, fontWeight: "bold", marginBottom: "20px" }}>
        Projet de session – Environnement de développement
      </label>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "gray",
          padding: "30px",
          border: "10px",
          borderColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          <label>Veuillez entrer votre nom :</label>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setText(e.target.value);
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          <button style={{ marginRight: "20px" }} onClick={() => add(text)}>
            Add to DB
          </button>
          <button onClick={get}>Get from DB</button>
        </div>
        <label
          style={{
            fontSize: 20,
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "50px",
          }}
        >
          {name && "Hello " + name}
        </label>
      </div>
    </div>
  );
}

export default App;
