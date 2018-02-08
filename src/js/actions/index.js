import * as types from "../constants/action_types";

export const makeMove = (cell) => {
  return {
    type: types.MAKE_MOVE,
    cell: cell
  }
}
