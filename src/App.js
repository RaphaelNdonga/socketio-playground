import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';

function App() {
  const socket = io("ws://localhost:8080")

  socket.on("connect", () => {
    console.log("connected to socket: ", socket.id)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {
          console.log("Image has been clicked")
          socket.emit("message", "Message has been clicked!")
        }}> Click Me!</button>
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
