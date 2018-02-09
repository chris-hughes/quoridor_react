import * as types from "../constants/action_types";

const initialState = {
  squares: Array(81).fill(null),
  blackIsNext: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.MAKE_MOVE:
        const squares = state.squares.slice();
        squares[action.cell] = state.blackIsNext ? "♙" : "♟"

        return {
          squares: squares,
          blackIsNext: !state.blackIsNext
        }

    default:
      return state
  }
}

export default rootReducer
