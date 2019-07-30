import React from "react";
import "./App.css";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiempo: "Tue Jul 30 2019",
      nombre: "Compra de Concreto",
      encargado: "Luis Gonzalez",
      status: true
    };
  }
  Change = () => {
    this.setState({ status: !this.state.status });
  };
  render() {
    return (
      <div id="container">
        <ul className="Lista">
          <li className="TransactionInfo" id="Tiempo">
            {" "}
            <h3> {this.state.tiempo} </h3>
          </li>
          <div className="divider"> </div>
          <li className="TransactionInfo" id="Nombre">
            {" "}
            <h3> {this.state.nombre} </h3>{" "}
          </li>
          <div className="divider"> </div>
          <li className="TransactionInfo" id="Encargado">
            {" "}
            <h3> {this.state.encargado} </h3>{" "}
          </li>
          <div className="divider"> </div>
          <li className="TransactionInfo" id="Status">
            {" "}
            <h3 onClick={this.Change}>
              {" "}
              {this.state.status ? "📑" : "✔️"}{" "}
            </h3>{" "}
          </li>
          <div className="divider"> </div>
        </ul>
      </div>
    );
  }
}

export default Transaction;
