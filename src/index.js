import React from "react";
import ReactDOM from "react-dom";
import Acordian from "./acordian";
import "./styles.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello Acrodian</h1>
      </div>
      <Acordian title="Profile" expand={true}>
        I am gogin to display multiple attribute
        <div>test nidcds</div>
        <h5>Testing</h5>
      </Acordian>
      <Acordian title="Finance" expand={false}>
        Salary will credit every month of march
      </Acordian>
      <Acordian title="Health" expand={true}>
        Salary will credit every month of march
      </Acordian>
      <Acordian>
        <Bodys />
        <Acordian title="Finance">I am here</Acordian>
      </Acordian>
    </>
  );
}

const Bodys = s => (
  <div>
    <strong>Hello</strong> World
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
