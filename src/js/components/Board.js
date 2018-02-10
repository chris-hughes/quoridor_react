import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import Wall from './Wall'
import { makeMove, placeWall } from '../actions'
// import { placeWall } from '../actions'

const mapStateToProps = (state) => {
  return {
    squares: state.squares
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeMove: cell => dispatch(makeMove(cell)),
    placeWall: cell => dispatch(placeWall(cell))
  }
}


class defineBoard extends Component {
  renderSquare(i){
    return <Square value={this.props.squares[i]} onClick={()=>this.props.makeMove(i)} />
  }

  renderWall(orientation,i){
    return <Wall class={orientation} onClick={()=>this.props.placeWall(i)} />
  }

  renderBoardRow(i){
    return (
      <div className="board-row">
        {this.renderSquare(i*9+0)}
        {this.renderWall('v-wall',i*(8+9)+0)}
        {this.renderSquare(i*9+1)}
        {this.renderWall('v-wall',i*(8+9)+1)}
        {this.renderSquare(i*9+2)}
        {this.renderWall('v-wall',i*(8+9)+2)}
        {this.renderSquare(i*9+3)}
        {this.renderWall('v-wall',i*(8+9)+3)}
        {this.renderSquare(i*9+4)}
        {this.renderWall('v-wall',i*(8+9)+4)}
        {this.renderSquare(i*9+5)}
        {this.renderWall('v-wall',i*(8+9)+5)}
        {this.renderSquare(i*9+6)}
        {this.renderWall('v-wall',i*(8+9)+6)}
        {this.renderSquare(i*9+7)}
        {this.renderWall('v-wall',i*(8+9)+7)}
        {this.renderSquare(i*9+8)}
      </div>
    )
  }

  renderWallRow(i){
    return (
      <div className="wall-row">
        {this.renderWall('h-wall',i*(8+9)+0+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+1+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+2+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+3+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+4+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+5+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+6+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+7+8)}
        {this.renderWall('s-wall')}
        {this.renderWall('h-wall',i*(8+9)+8+8)}
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
