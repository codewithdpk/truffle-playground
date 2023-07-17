import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import { useEffect } from "react";
import abi from "./abi.json";

function App() {
  useEffect(() => {
    initWeb3();
  }, []);

  async function initWeb3() {
    const web3 = new Web3("http://127.0.0.1:7545");

    const contract = new web3.eth.Contract(
      abi,
      "0xC8ad7d6858423AE937a0305De1241eD3f03635DA"
    );

    const todo = await contract.methods.todos(1).call();

    console.log(todo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
