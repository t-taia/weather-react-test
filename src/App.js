import React from 'react';
import Weather from './Weather';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
          <a
            href="https://github.com/t-taia/weather-react-test"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source coded
          </a>{" "}
          by taia
        </footer>
    </div>
  );
}

export default App;
