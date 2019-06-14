import React from 'react';
import logo from './logo.svg';
import * as styles from './App.scss';
import Button from './Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          className={styles.btn}
          onClick={() => alert('I am globally styled')}>
          I am button 1 - Press Me
        </button>
        <Button />
      </header>
    </div>
  );
}

export default App;
