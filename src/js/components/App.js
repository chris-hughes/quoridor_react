import React, { Component } from 'react';
import '../../App.css';
import Board from './Board'

// import Game from './Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quoridor React</h1>
        </header>
        <p className="App-intro">
          One day we will get this game working
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
