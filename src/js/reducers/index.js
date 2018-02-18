import * as types from "../constants/action_types";
import { getLegalMoves, calculateWinner } from '../helpers'

let initialState = {
  squares: Array(288).fill(null),
  walls: [],
  blackWalls: 10,
  whiteWalls: 10,
  blackIsNext: true,
  winner: null,
  devMode: true,
  wallHovered: []
}

initialState.squares[8]="♙";
initialState.squares[280]="♟";

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
      if (state.walls.indexOf(action.cell)>-1 ||
          action.orientation==='s-wall' ||
          // walls at the edge
          [33,67,101,135,169,203,237,271,
           273,275,277,279,281,283,285,287].includes(action.cell) ||
          (state.blackIsNext && state.blackWalls===0) ||
          (!state.blackIsNext && state.whiteWalls===0)
         )
        return state;

      const walls = state.walls.slice()

      if (action.orientation==='h-wall'){
        if (walls.includes(action.cell+1) || walls.includes(action.cell+2))
          return state;
        walls.push(action.cell,action.cell+1,action.cell+2);
      }
      else if (action.orientation==='v-wall'){
        if (walls.includes(action.cell+17) || walls.includes(action.cell+34))
          return state;
        walls.push(action.cell,action.cell+17,action.cell+34);
      }

      return {
        ...state,
        walls: walls,
        blackWalls: state.blackIsNext ?
          Math.max(state.blackWalls-1,0) : state.blackWalls,
        whiteWalls: state.blackIsNext ?
          state.whiteWalls : Math.max(state.whiteWalls-1,0),
        blackIsNext: !state.blackIsNext
      }

    case types.WALL_HOVER_ON:
      if (action.orientation==='s-wall' ||
          // walls at the edge
          [33,67,101,135,169,203,237,271,
           273,275,277,279,281,283,285,287].includes(action.cell)
      ) return state;

      if (action.orientation==='h-wall'){
        if (state.walls.includes(action.cell) ||
            state.walls.includes(action.cell+1) ||
            state.walls.includes(action.cell+2)
        ) return state

        return {
          ...state,
          wallHovered: [action.cell,action.cell+1,action.cell+2]
        }
      }

      if (action.orientation==='v-wall'){
        if (state.walls.includes(action.cell) ||
            state.walls.includes(action.cell+17) ||
            state.walls.includes(action.cell+34)
        ) return state

        return {
          ...state,
          wallHovered: [action.cell,action.cell+17,action.cell+34]
        }
      }

      else return state

    case types.WALL_HOVER_OUT:
      return {
        ...state,
        wallHovered: []
      }

    case types.DEV_MODE:
      return {
        ...state,
        devMode: !state.devMode
      }

    case types.NEW_GAME:
      return initialState;

    default:
      return state
  }
}

export default rootReducer
