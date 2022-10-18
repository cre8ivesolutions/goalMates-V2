import logo from './public/success.jpg';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
        <img src={logo} className="App-logo" alt="logo" />
         <a
          className="App-link"
          href="https://www.meetup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Model App 'Meetup'
        </a>
      </header>
    </div>
  );
}

export default App;
