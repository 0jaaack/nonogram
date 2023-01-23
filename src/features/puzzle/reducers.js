import PUZZLE from "../../constants/puzzle";

const initialState = {
  puzzles: {
    "talk": {
      title: "talk",
      slug: "talk",
      size: "size1",
      cellSize: 6,
      row: [[7], [2, 2, 1], [4, 1], [1], [5], [1, 1], [1, 1, 1, 1], [1, 1, 2], [1, 2], [5]],
      column: [[6], [1, 1], [1, 2, 1], [2, 1, 1], [3, 3, 2], [1, 1, 2], [4, 2], [3], [1], [3]],
      board: [],
    },
  },
  sizes: {
    byId: {
      size1: "10 X 10",
    },
    allIds: ["size1"],
  },
  puzzlesBySize: {
    size1: ["talk"],
  },
};

function puzzleReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return Object.assign({}, state);
  }
}

export default puzzleReducer;
