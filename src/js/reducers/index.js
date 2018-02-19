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


      const easystarjs = require('easystarjs');
      const easystar = new easystarjs.js();

      const sWalls = [
        18,20,22,24,26,28,30,32,52,54,56,58,60,62,64,66,86,88,90,92,94,96,98,100,
        120,122,124,126,128,130,132,134,154,156,158,160,162,164,166,168,188,190,
        192,194,196,198,200,202,222,224,226,228,230,232,234,236,256,258,260,262,
        264,266,268,270];

      let tilemap = Array(17).fill(null);
      tilemap.forEach((i,j)=>{
        tilemap[j] = Array(17).fill(0);
      })

      // square walls
      sWalls.forEach((w)=>{
        tilemap[Math.floor(w/17)][w % 17]=1;
      })

      // already placed walls
      walls.forEach((w)=>{
        tilemap[Math.floor(w/17)][w % 17]=1;
      })

      const cell = state.blackIsNext ?
        state.squares.indexOf("♟") : state.squares.indexOf("♙")
      const otherCell = state.blackIsNext ?
        state.squares.indexOf("♙") : state.squares.indexOf("♟")

      // do i need to improve this to allow for jumps???
      tilemap[Math.floor(otherCell/17)][otherCell % 17]=1;

      easystar.setGrid(tilemap);
      easystar.setAcceptableTiles([0]);
      easystar.findPath(Math.floor(cell/17),cell % 17,16,0,(path)=>{
	      if (path===null){
		      alert("Path was not found.");
	      } else {
          console.log(tilemap)
          path.forEach((i,j)=>{
            // console.log(i)
            // console.log(j)
            console.log("Move: "+j+" ["+path[j].x+","+path[j].y+"]")
          })
	      }
      });
      easystar.calculate();



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
