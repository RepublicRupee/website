import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code>
          <h1>Republic Rupee</h1>
          Coming Soon! India's Blockchain Powered Stablecoin.
        </code>
        <br></br>
        <code>
        <a
          className="App-link"
          href="https://t.me/RepublicRupee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a> | <a
          className="App-link"
          href="https://twitter.com/RepublicRupee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a> | <a
          className="App-link"
          href="https://github.com/RepublicRupee"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a> | <a
          className="App-link"
          href="https://medium.com/@RepublicRupee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
        </code>
      </header>
    </div>
  );
}

export default App;
