import logo from "./public/success.jpg";
import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
        <br />
        <hr />
        <img src={logo} size="100x100" className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.meetup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Our Model Site 'Meetup.com'
        </a>
      </header>
    </div>
  );
}

export default App;
