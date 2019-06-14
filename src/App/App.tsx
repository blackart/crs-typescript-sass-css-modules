import React from 'react';
import logo from '../assets/images/logo.svg';
import styles from './App.module.scss';
import Button from '../components/Button/Button';

let clickButtonHandler = () => alert('I am globally styled');

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          className={styles.btn}
          onClick={clickButtonHandler}>
          I am button 1 - Press Me
        </button>
        <Button />
      </header>
    </div>
  );
};

export default App;
