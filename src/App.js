import React from "react";
import cemex from "./cemex.png";
import luis from "./luis.jpg";
import "./App.css";
import Transaction from "./Transactions.js";
import Transaction2 from "./Transactions2.js";
import steps from "./imagen.PNG";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show2: true
    };
  }

  magic = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };
  magic2 = () => {
    this.setState({ show2: !this.state.show2 });
    console.log(this.state.show2);
  };
  render() {
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
                <p className="Informacion" onClick={this.magic}>
                  Encargado
                </p>
              </li>
              <li>
                <p className="Informacion" onClick={this.magic2}>
                  Status
                </p>
              </li>
              <li>
                <p className="Informacion">Paso</p>
              </li>
            </ul>
          </div>
          <body id="TransactinHistory">
            <div
              id="MarginContent"
              style={
                this.state.show
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              <Transaction />
            </div>
            <div
              id="MarginContent"
              style={
                this.state.show2
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              <Transaction2 />
            </div>
          </body>
        </header>
        <img src={steps} className="steps" alt="logo" />
      </div>
    );
  }
}

export default App;
