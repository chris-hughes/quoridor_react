import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import Wall from './Wall'
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

  renderWall(orientation){
    return <Wall class={orientation} onClick={()=>alert('wall')} />
  }

  renderBoardRow(j){
    return (
      <div className="board-row">
        {this.renderSquare(j*9+0)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+1)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+2)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+3)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+4)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+5)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+6)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+7)}
        {this.renderWall('v-wall',0)}
        {this.renderSquare(j*9+8)}
      </div>
    )
  }

  renderWallRow(k){
    return (
      <div className="wall-row">
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
        {this.renderWall('s-wall',0)}
        {this.renderWall('h-wall',0)}
      </div>
    )
  }

  render(){
    return (
      <div>
        {this.renderBoardRow(0)}
        {this.renderWallRow()}
        {this.renderBoardRow(1)}
        {this.renderWallRow()}
        {this.renderBoardRow(2)}
        {this.renderWallRow()}
        {this.renderBoardRow(3)}
        {this.renderWallRow()}
        {this.renderBoardRow(4)}
        {this.renderWallRow()}
        {this.renderBoardRow(5)}
        {this.renderWallRow()}
        {this.renderBoardRow(6)}
        {this.renderWallRow()}
        {this.renderBoardRow(7)}
        {this.renderWallRow()}
        {this.renderBoardRow(8)}
      </div>
    )
  }
}

const Board = connect(mapStateToProps,mapDispatchToProps)(defineBoard)

export default Board;
