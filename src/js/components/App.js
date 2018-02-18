import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import Game from './Game'
import { devMode } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    devMode: () => dispatch(devMode())
  }
}

class defineApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quoridor React</h1>
        </header>
        Dev Mode: <input type="checkbox" defaultChecked onChange={()=>this.props.devMode()} />
        <p className="App-intro">
          One day we will get this game working
        </p>
        <Game />
      </div>
    );
  }
}

const App = connect(null,mapDispatchToProps)(defineApp)

export default App;
