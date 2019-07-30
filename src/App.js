import React from "react";
import cemex from "./cemex.png";
import luis from "./luis.jpg";
import "./App.css";
import Transaction from "./Transactions.js";
import Transaction2 from "./Transactions2.js";

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
            <ul>
              <li>
                <img id="UserLogo" src={luis} alt="Luis" />
              </li>
              <li>
                <p id="Name">Luis Gonzalez</p>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <ul id="InfoContainer">
            <li>
              <p className="Informacion">Fecha</p>
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
            <li>
              <p className="Informacion">Paso</p>
            </li>
          </ul>
        </div>
        <body id="TransactinHistory">
          <div id="MarginContent">
            <Transaction />
          </div>
          <div id="MarginContent">
            <Transaction2 />
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
