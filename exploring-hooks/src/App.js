import logo from './logo.svg';
import './App.css';
import StatelessButton from './StatelessButton'
import StatelessDataLoader from './StatelessDataLoader'

function App() {
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
        <StatelessButton />
        <StatelessDataLoader/>
      </header>
    </div>
  );
}

export default App;
