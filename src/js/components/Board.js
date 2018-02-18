import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import Wall from './Wall'
import { makeMove, placeWall } from '../actions'
import { getLegalMoves } from '../helpers'
// import { placeWall } from '../actions'

const mapStateToProps = (state) => {
  return {
    squares: state.squares,
    walls: state.walls,
    blackIsNext: state.blackIsNext,
    devMode: state.devMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeMove: cell => dispatch(makeMove(cell)),
    placeWall: (cell, orientation) => dispatch(placeWall(cell, orientation))
  }
}


class defineBoard extends Component {
  renderSquare(i,legalMoves){
    let squareClass = (legalMoves.includes(i) && this.props.devMode) ?
        "square legal" : "square"
    return <Square
              class = {squareClass}
              value={this.props.squares[i]}
              onClick={()=>this.props.makeMove(i)}
              num = {this.props.devMode ? i : null}
           />
  }

  renderWall(orientation,i){
    let wallClass = this.props.walls.indexOf(i)===-1 ?
      orientation :
      orientation+" placed"
    return <Wall
            class={wallClass}
            onClick={()=>this.props.placeWall(i,wallClass)}
            num = {this.props.devMode ? i : null}
           />
  }

  renderBoardRow(i,legalMoves){
    return (
      <div className="board-row">
        {this.renderSquare(i*34+0,legalMoves)}
        {this.renderWall('v-wall',i*34+1)}
        {this.renderSquare(i*34+2,legalMoves)}
        {this.renderWall('v-wall',i*34+3)}
        {this.renderSquare(i*34+4,legalMoves)}
        {this.renderWall('v-wall',i*34+5)}
        {this.renderSquare(i*34+6,legalMoves)}
        {this.renderWall('v-wall',i*34+7)}
        {this.renderSquare(i*34+8,legalMoves)}
        {this.renderWall('v-wall',i*34+9)}
        {this.renderSquare(i*34+10,legalMoves)}
        {this.renderWall('v-wall',i*34+11)}
        {this.renderSquare(i*34+12,legalMoves)}
        {this.renderWall('v-wall',i*34+13)}
        {this.renderSquare(i*34+14,legalMoves)}
        {this.renderWall('v-wall',i*34+15)}
        {this.renderSquare(i*34+16,legalMoves)}
      </div>
    )
  }

  renderWallRow(i){
    return (
      <div className="wall-row">
        {this.renderWall('h-wall',i*34+16+1)}
        {this.renderWall('s-wall',i*34+16+2)}
        {this.renderWall('h-wall',i*34+16+3)}
        {this.renderWall('s-wall',i*34+16+4)}
        {this.renderWall('h-wall',i*34+16+5)}
        {this.renderWall('s-wall',i*34+16+6)}
        {this.renderWall('h-wall',i*34+16+7)}
        {this.renderWall('s-wall',i*34+16+8)}
        {this.renderWall('h-wall',i*34+16+9)}
        {this.renderWall('s-wall',i*34+16+10)}
        {this.renderWall('h-wall',i*34+16+11)}
        {this.renderWall('s-wall',i*34+16+12)}
        {this.renderWall('h-wall',i*34+16+13)}
        {this.renderWall('s-wall',i*34+16+14)}
        {this.renderWall('h-wall',i*34+16+15)}
        {this.renderWall('s-wall',i*34+16+16)}
        {this.renderWall('h-wall',i*34+16+17)}
      </div>
    )
  }

  render(){
    const legalMoves = getLegalMoves({
      squares: this.props.squares,
      walls: this.props.walls,
      blackIsNext: this.props.blackIsNext,
    });
    return (
      <div>
        {this.renderBoardRow(0,legalMoves)}
        {this.renderWallRow(0)}
        {this.renderBoardRow(1,legalMoves)}
        {this.renderWallRow(1)}
        {this.renderBoardRow(2,legalMoves)}
        {this.renderWallRow(2)}
        {this.renderBoardRow(3,legalMoves)}
        {this.renderWallRow(3)}
        {this.renderBoardRow(4,legalMoves)}
        {this.renderWallRow(4)}
        {this.renderBoardRow(5,legalMoves)}
        {this.renderWallRow(5)}
        {this.renderBoardRow(6,legalMoves)}
        {this.renderWallRow(6)}
        {this.renderBoardRow(7,legalMoves)}
        {this.renderWallRow(7)}
        {this.renderBoardRow(8,legalMoves)}
      </div>
    )
  }
}

const Board = connect(mapStateToProps,mapDispatchToProps)(defineBoard)

export default Board;
