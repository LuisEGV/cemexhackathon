import React from "react";
import cemex from "./cemex.png";
import "./App.css";
import Transaction from "./Transactions.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul id="HeaderList">
          <li>
            <a href="https://www.cemex.com/">
              <img src={cemex} className="App-logo" alt="logo" />
            </a>
          </li>
          <li>
            <span id="UserLogo"> </span>
          </li>
        </ul>
        <div>
          <ul id="InfoContainer">
            <li>
              <p className="Informacion">Hora</p>
            </li>
            <li>
              <p className="Informacion">Orden</p>
            </li>
            <li>
              <p className="Informacion">Encargado</p>
            </li>
            <li>
              <p className="Informacion">Status</p>
            </li>
          </ul>
        </div>
        <body id="TransactinHistory">
          <div id="MarginContent">
            <Transaction />
          </div>
          <div id="MarginContent">
            <Transaction />
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
