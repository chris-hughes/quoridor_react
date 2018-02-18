import React, { Component } from "react"
import { connect } from 'react-redux'
import Board from './Board'
import { newGame } from '../actions'

const mapStateToProps = (state) => {
  return {
    blackIsNext: state.blackIsNext,
    winner: state.winner,
    blackWalls: state.blackWalls,
    whiteWalls: state.whiteWalls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: () => dispatch(newGame())
  }
}


class defineGame extends Component {
  render(){
    let status
    if (this.props.winner){
      status = 'Winner: '+ this.props.winner
    } else {
      status = 'Next player: ' + (this.props.blackIsNext ? 'Black' : 'White');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>
            <p>{status}</p>
            <p>Black walls remaining: {this.props.blackWalls}</p>
            <p>White walls remaining: {this.props.whiteWalls}</p>
            <input type="button" value="New Game" onClick={()=>this.props.newGame()} />
          </div>
        </div>
      </div>
    )
  }
}

const Game = connect(mapStateToProps,mapDispatchToProps)(defineGame);

export default Game
