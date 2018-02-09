import * as types from "../constants/action_types";

let initialState = {
  squares: Array(81).fill(null),
  blackIsNext: true
}

initialState.squares[4]="♙";
initialState.squares[76]="♟";

function getLegalMoves(state){
  const squares = state.squares.slice();
  const cell = state.blackIsNext ?
    squares.indexOf("♟") : squares.indexOf("♙")

  let legalMoves=[]
  if (cell % 9 === 0){
    if (Math.floor(cell/9)===0) legalMoves.push(cell+1,cell+9)
    else if (Math.floor(cell/9)===8) legalMoves.push(cell+1,cell-9)
    else legalMoves.push(cell+1,cell+9,cell-9)
  }
  else if (cell % 9 === 8){
    if (Math.floor(cell/9)===0) legalMoves.push(cell-1,cell+9)
    else if (Math.floor(cell/9)===8) legalMoves.push(cell-1,cell-9)
    else legalMoves.push(cell-1,cell+9,cell-9)
  }
  else legalMoves.push(cell+1,cell-1,cell+9,cell-9)

  return legalMoves;
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.MAKE_MOVE:
      const squares = state.squares.slice();
      const indexOfCurrentPlayer = state.blackIsNext ?
        squares.indexOf("♟") : squares.indexOf("♙")
      const legalMoves = getLegalMoves(state);

      if (squares[action.cell] || legalMoves.indexOf(action.cell)===-1) return state;

      squares[action.cell] = state.blackIsNext ? "♟" : "♙"
      squares[indexOfCurrentPlayer] = null

      return {
        squares: squares,
        blackIsNext: !state.blackIsNext
      }

    default:
      return state
  }
}

export default rootReducer
