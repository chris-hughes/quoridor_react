import * as types from "../constants/action_types";

let initialState = {
  squares: Array(81).fill(null),
  walls: [],
  blackWalls: 10,
  whiteWalls: 10,
  blackIsNext: true,
  winner: null
}

initialState.squares[8]="♙";
initialState.squares[280]="♟";

function getLegalMoves(state){
  const squares = state.squares.slice();
  const cell = state.blackIsNext ?
    squares.indexOf("♟") : squares.indexOf("♙")

  let legalMoves=[]
  // you're on the left hand side
  if (cell % 34 === 0){
    if (cell===0) legalMoves.push(2,34)
    else if (cell===272) legalMoves.push(238,274)
    else legalMoves.push(cell+2,cell-34,cell+34)
  }
  // you're on the right hand side
  else if ((cell-16) % 34 === 0){
    if (cell===16) legalMoves.push(14,50)
    else if (cell===288) legalMoves.push(286,254)
    else legalMoves.push(cell-2,cell-34,cell+34)
  }
  // you're on the top (but not corner as done before)
  else if (cell<16) legalMoves.push(cell+2,cell-2,cell+34)
  // you're on the bottom (but not corner as done before)
  else if (cell>272) legalMoves.push(cell+2,cell-2,cell-34)

  else legalMoves.push(cell+2,cell-2,cell+34,cell-34)

  return legalMoves;
}

function calculateWinner(squares){

  if (squares.indexOf("♟") < 9) return "Black"
  else if (squares.indexOf("♙") > 72) return "White"
  else return null
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.MAKE_MOVE:
      const squares = state.squares.slice();
      const indexOfCurrentPlayer = state.blackIsNext ?
        squares.indexOf("♟") : squares.indexOf("♙")
      const legalMoves = getLegalMoves(state);

      if (squares[action.cell] ||
          legalMoves.indexOf(action.cell)===-1 ||
          calculateWinner(squares)) return state;

      squares[action.cell] = state.blackIsNext ? "♟" : "♙"
      squares[indexOfCurrentPlayer] = null

      return {
        ...state,
        squares: squares,
        blackIsNext: !state.blackIsNext,
        winner: calculateWinner(squares)
      }

    case types.PLACE_WALL:
      const walls = state.walls.slice()
      if (action.cell===-1 || walls.indexOf(action.cell)>-1) return state;

      walls.push(action.cell);
      return {
        ...state,
        walls: walls,
        blackWalls: state.blackIsNext ? state.blackWalls-1 : state.blackWalls,
        whiteWalls: state.blackIsNext ? state.whiteWalls : state.whiteWalls-1,
        blackIsNext: !state.blackIsNext
      }

    default:
      return state
  }
}

export default rootReducer
