import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import { makeMove } from '../actions'

const mapStateToProps = (state) => {
  return {
    squares: state.squares
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeMove: cell => dispatch(makeMove(cell))
  }
}


class defineBoard extends Component {
  renderSquare(i){
    return <Square value={this.props.squares[i]} onClick={()=>this.props.makeMove(i)} />
  }

  renderBoardRow(j){
    return (
      <div className="board-row">
        {this.renderSquare(j*9+0)}
        {this.renderSquare(j*9+1)}
        {this.renderSquare(j*9+2)}
        {this.renderSquare(j*9+3)}
        {this.renderSquare(j*9+4)}
        {this.renderSquare(j*9+5)}
        {this.renderSquare(j*9+6)}
        {this.renderSquare(j*9+7)}
        {this.renderSquare(j*9+8)}
      </div>
    )
  }

  render(){
    return (
      <div>
        {this.renderBoardRow(0)}
        {this.renderBoardRow(1)}
        {this.renderBoardRow(2)}
        {this.renderBoardRow(3)}
        {this.renderBoardRow(4)}
        {this.renderBoardRow(5)}
        {this.renderBoardRow(6)}
        {this.renderBoardRow(7)}
        {this.renderBoardRow(8)}
      </div>
    )
  }
}

const Board = connect(mapStateToProps,mapDispatchToProps)(defineBoard)

export default Board;
