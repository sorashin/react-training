import React, { Component } from 'react';
import styles from './style/App.css';
import Board from './container/Board';
import logo from './logo.svg';



class App extends Component {
  render() {

    return (
      <div className={styles.App}>
        <Board/>
      </div>
    );
  }
}

export default App;
