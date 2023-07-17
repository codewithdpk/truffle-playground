import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import abi from "./abi.json";
const web3 = new Web3("http://127.0.0.1:7545");
const contract = new web3.eth.Contract(
  abi,
  "0xC8ad7d6858423AE937a0305De1241eD3f03635DA"
);

function App() {
  const [accounts, setAccounts] = useState([]);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    connect();
    getCount();
  }, []);

  async function getCount() {
    const count = await contract.methods.todoCount().call();
    const latest = await contract.methods.todos(count).call();
    console.log(latest.content);
    setCount(Number(count));
  }

  async function click() {
    const web3 = new Web3("http://127.0.0.1:7545");
    const contract = new web3.eth.Contract(
      abi,
      "0xC8ad7d6858423AE937a0305De1241eD3f03635DA"
    );

    await contract.methods.createTodo(content).send({ from: accounts[0] });
    getCount();
  }

  async function connect() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
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
        <span>Count: {count}</span>

        <input
          placeholder="Enter todo"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={click}>Add</button>
      </header>
    </div>
  );
}

export default App;
