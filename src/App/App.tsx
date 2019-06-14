import React from 'react';
import logo from '../assets/images/logo.svg';
import * as styles from './App.module.scss';
import Button from '../components/Button/Button';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
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
