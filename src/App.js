import React, { useState } from "react";
import "./App.css";
import Image from "./image.png"; // Importing logo here


function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="app">
      <header className="header">
      <img src={Image} alt="Logo" className="logo" /> 
        <h1 className="header-title">Item List Manager</h1>
      </header>
      <main className="main-container">
        <div className="input-section">
          <input
            type="text"
            className="input-box"
            placeholder="Enter item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-button" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
