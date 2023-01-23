import { SHOW_NEXT_MONTH } from "./types";
import PUZZLE from "../../constants/puzzle";

const initialState = {
  "talk": {
    slug: "talk",
    size: PUZZLE.SIZE["10X10"],
    cellSize: 6,
    row: [[7], [2, 2, 1], [4, 1], [1], [5], [1, 1], [1, 1, 1, 1], [1, 1, 2], [1, 2], [5]],
    column: [[6], [1, 1], [1, 2, 1], [2, 1, 1], [3, 3, 2], [1, 1, 2], [4, 2], [3], [1], [3]],
    board: [],
  },
};

function puzzleReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return Object.assign({}, state);
  }
}

export default puzzleReducer;
