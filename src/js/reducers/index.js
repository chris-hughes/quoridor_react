import * as types from "../constants/action_types";

const initialState = {
  squares: Array(81).fill(null),
  redIsNext: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.MAKE_MOVE:
        const squares = state.squares.slice();
        squares[action.cell] = state.redIsNext ? 'R' : 'B'

        return {
          squares: squares,
          redIsNext: !state.redIsNext
        }

    default:
      return state
  }
}

export default rootReducer
