import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import Wall from './Wall'
import { makeMove, placeWall } from '../actions'
// import { placeWall } from '../actions'

const mapStateToProps = (state) => {
  return {
    squares: state.squares,
    walls: state.walls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeMove: cell => dispatch(makeMove(cell)),
    placeWall: (cell, orientation) => dispatch(placeWall(cell, orientation))
  }
}


class defineBoard extends Component {
  renderSquare(i){
    return <Square
              value={this.props.squares[i]}
              onClick={()=>this.props.makeMove(i)}
              num = {i}
           />
  }

  renderWall(orientation,i){
    let wallClass = this.props.walls.indexOf(i)===-1 ?
      orientation :
      orientation+" placed"
    return <Wall
            class={wallClass}
            onClick={()=>this.props.placeWall(i,wallClass)}
            num = {i}
           />
  }

  renderBoardRow(i){
    return (
      <div className="board-row">
        {this.renderSquare(i*34+0)}
        {this.renderWall('v-wall',i*34+1)}
        {this.renderSquare(i*34+2)}
        {this.renderWall('v-wall',i*34+3)}
        {this.renderSquare(i*34+4)}
        {this.renderWall('v-wall',i*34+5)}
        {this.renderSquare(i*34+6)}
        {this.renderWall('v-wall',i*34+7)}
        {this.renderSquare(i*34+8)}
        {this.renderWall('v-wall',i*34+9)}
        {this.renderSquare(i*34+10)}
        {this.renderWall('v-wall',i*34+11)}
        {this.renderSquare(i*34+12)}
        {this.renderWall('v-wall',i*34+13)}
        {this.renderSquare(i*34+14)}
        {this.renderWall('v-wall',i*34+15)}
        {this.renderSquare(i*34+16)}
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
    return (
      <div>
        {this.renderBoardRow(0)}
        {this.renderWallRow(0)}
        {this.renderBoardRow(1)}
        {this.renderWallRow(1)}
        {this.renderBoardRow(2)}
        {this.renderWallRow(2)}
        {this.renderBoardRow(3)}
        {this.renderWallRow(3)}
        {this.renderBoardRow(4)}
        {this.renderWallRow(4)}
        {this.renderBoardRow(5)}
        {this.renderWallRow(5)}
        {this.renderBoardRow(6)}
        {this.renderWallRow(6)}
        {this.renderBoardRow(7)}
        {this.renderWallRow(7)}
        {this.renderBoardRow(8)}
      </div>
    )
  }
}

const Board = connect(mapStateToProps,mapDispatchToProps)(defineBoard)

export default Board;
