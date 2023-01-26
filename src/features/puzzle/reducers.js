import { CHECK_BOARD } from "./types";
import PUZZLE from "../../constants/puzzle";

const lineCount = (count) => ({
  count,
  isDone: false,
});

const toLineCount = (line) => {
  return line.map((counts) => {
    return counts.map((count) => lineCount(count));
  });
};

const initialState = {
  puzzles: {
    talk: {
      title: "talk",
      size: "size1",
      column: toLineCount([[7], [2, 2, 1], [4, 1], [1], [5], [1, 1], [1, 1, 1, 1], [1, 1, 2], [1, 2], [5]]),
      row: toLineCount([[6], [1, 1], [1, 2, 1], [2, 1, 1], [3, 3, 2], [1, 1, 2], [4, 2], [3], [1], [3]]),
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null)),
      isPuzzleDone: false,
    },
    rabbit: {
      title: "rabbit",
      size: "size1",
      column: toLineCount([[4], [4, 2], [1, 1, 2], [4, 1], [1, 1], [1, 2], [1, 2, 3], [3, 1], [2], [4]]),
      row: toLineCount([[2, 3], [1, 2, 1], [1, 1, 2], [1, 1, 2], [2, 1], [1, 1, 1, 3], [1, 1, 2], [2, 1, 1], [3, 1], [1, 1]]),
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null)),
      isPuzzleDone: false,
    },
    fencing: {
      title: "fencing",
      size: "size1",
      column: toLineCount([[2, 2], [1, 1, 2], [5], [7], [2, 1, 1], [1, 1], [1, 1, 4], [1, 1], [1], [1]]),
      row: toLineCount([[2, 2], [1, 2], [1, 1, 1], [4, 3], [2, 1], [2], [5], [2, 1], [2, 1], [1, 2]]),
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null)),
      isPuzzleDone: false,
    },
    mushroom: {
      title: "mushroom",
      size: "size1",
      column: toLineCount([[2], [1, 2], [5, 2], [7, 1], [1, 1, 1, 1], [1, 2, 1, 1], [1, 6, 1], [1, 3, 1], [4], [2]]),
      row: toLineCount([[4], [2, 1], [6, 1], [1, 2, 5], [4, 4], [8], [1, 1], [1, 1], [1, 1], [4]]),
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null)),
      isPuzzleDone: false,
    },
    pinocchio: {
      title: "pinocchio",
      size: "size1",
      column: toLineCount([[1], [6, 2], [3, 3], [2, 1], [2, 2, 1], [3, 3], [1, 3, 1], [1, 1], [1], [1]]),
      row: toLineCount([[4], [8], [2, 1], [1, 1, 1], [1, 1, 4], [1, 1], [2, 1], [4], [2, 1], [1, 1]]),
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null)),
      isPuzzleDone: false,
    },
    butterfly: {
      title: "butterfly",
      size: "size2",
      board: Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => null)),
      row: toLineCount([[2], [1], [5, 1, 2], [1, 1, 1, 1], [1, 2, 1, 4], [1, 1, 1, 1, 1], [1, 3, 1], [1, 2, 1], [3, 2, 2], [2, 1, 3], [1, 1, 1], [2, 1, 1, 1], [1, 1, 1], [4, 4], []]),
      column: toLineCount([[7], [1, 2], [1, 2, 3], [1, 2, 1], [3, 1], [1, 1], [2, 2], [4, 4], [1, 5, 3], [2, 1], [1, 1, 2, 1], [1, 1, 3], [1, 1], [1, 1], [5]]),
      isPuzzleDone: false,
    },
    "hula-hoop": {
      title: "hula-hoop",
      size: "size2",
      board: Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => null)),
      row: toLineCount([[4], [2, 1, 1, 2], [1, 1, 2, 1, 1, 1, 1], [1, 1, 1, 2, 1], [1, 1, 4, 1], [1, 1], [2, 3], [3, 1, 2], [2, 1, 1, 1, 1], [1, 2, 2, 1], [2, 1, 4, 1, 2], [3, 3], [10], [1, 2, 1], [1, 1, 1, 1]]),
      column: toLineCount([[4, 3], [1, 1, 2, 2], [2, 2, 2], [1, 9], [3, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 2], [1, 1, 1, 1, 2], [1, 1, 1, 1, 1], [3, 1, 1], [1, 9], [1, 2, 2], [1, 1, 2, 2], [3, 4], []]),
      isPuzzleDone: false,
    },
    mantis: {
      title: "mantis",
      size: "size2",
      board: Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => null)),
      row: toLineCount([[1, 1, 6, 1, 2], [4, 4, 5], [5, 6], [3, 2, 4], [3, 1, 1, 4], [2, 4, 3], [2, 3], [1, 2, 3, 1], [2, 2, 2, 1], [2, 2], [3, 1, 2], [6, 4, 1], [5, 6], [1, 3, 4, 1], [1, 1, 2, 1]]),
      column: toLineCount([[5, 3], [4, 2, 2, 1], [6, 2, 3], [2, 2, 6], [1, 1, 1, 2, 4], [2, 1, 1, 2], [2, 1, 1, 1], [2, 1, 1, 1], [2, 1, 1, 2], [1, 1, 1, 3, 3], [2, 4, 4], [7, 5], [5, 2, 2], [5, 3, 1, 1], [5, 3]]),
      isPuzzleDone: false,
    },
    coconut: {
      title: "coconut",
      size: "size2",
      board: Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => null)),
      row: toLineCount([[1, 1, 2, 3], [2, 1, 2, 1, 1], [2, 1, 5, 2], [1, 1, 1, 6], [1, 2, 2, 1], [1, 4], [3, 1], [2, 2, 1], [1, 2, 2, 2], [4, 2, 2, 1], [1, 2, 1, 2, 2, 1], [4, 4, 5], [5, 2, 6], [6, 7], [15]]),
      column: toLineCount([[1, 1, 5], [2, 1, 2, 4], [2, 1, 6], [1, 1, 8], [1, 2, 3], [1, 1, 2, 2], [1, 1, 1, 1, 2, 1], [3, 1, 4, 1], [2, 1, 2, 2], [2, 2, 3], [14], [1, 12], [1, 2, 1, 4], [1, 2, 2, 5], [1, 2, 1, 2, 4]]),
      isPuzzleDone: false,
    },
    bear: {
      title: "bear",
      size: "size2",
      board: Array.from({ length: 15 }, () => Array.from({ length: 15 }, () => null)),
      row: toLineCount([[3], [7, 1], [5, 2, 1, 1, 1], [2, 2, 1, 2], [1, 5], [4, 1, 2], [2, 3, 1, 1, 2], [3, 1, 4], [5, 3, 1], [4, 2], [2, 1, 3], [2, 1, 2, 2, 1], [1, 1, 3, 2], [1, 1, 2, 1], [2, 1, 3]]),
      column: toLineCount([[5], [2, 3], [1, 1, 1], [1, 1, 2, 2, 1], [2, 1, 1, 1, 2], [1, 1, 1, 1, 1], [3, 1, 1, 4], [2, 2], [1, 1, 3], [2, 2, 2, 2, 1], [2, 2, 4, 2], [1, 1, 5, 5], [1, 3, 1, 3, 1], [4, 2, 1, 3], [1, 1, 1, 2]]),
      isPuzzleDone: false,
    },
    peanut: {
      title: "peanut",
      size: "size3",
      board: Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => null)),
      row: toLineCount([[1], [3], [1, 1, 2], [1, 3], [1, 1, 1, 2], [1, 1], [1, 2, 2, 1], [2, 2, 1, 2, 1], [3, 1, 1, 1, 1], [4, 1, 3, 1, 2], [3, 3, 3, 2], [2, 2], [2, 2, 3], [3, 3, 4], [4, 4, 3], [4, 5, 3], [5, 6, 3], [4, 6, 4], [2, 6, 5], [20]]),
      column: toLineCount([[16], [13], [3, 5, 1], [1, 4, 1], [1, 1], [1], [2], [3], [3, 5], [2, 1, 8], [1, 1, 8], [1, 1, 2, 7], [1, 3, 4, 1], [1, 1, 2, 1, 1], [1, 1, 1], [1, 2, 1, 2], [1, 3, 1, 3], [3, 8], [3, 11], [1, 17]]),
      isPuzzleDone: false,
    },
    puppy: {
      title: "puppy",
      size: "size3",
      board: Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => null)),
      row: toLineCount([[11], [2, 1, 4], [2, 1, 1, 2], [1, 1, 1, 1], [1, 2, 1, 1, 2, 2], [3, 1, 1, 3], [1, 1], [3, 2], [4, 1, 1, 2], [1, 1, 2, 2, 1, 1], [8, 2, 1, 1], [1, 3, 1], [2, 1, 2, 2, 1], [1, 4, 2, 1], [2, 1, 2, 1, 1], [1, 3, 3, 1], [1, 1, 2, 1, 1], [1, 2, 5, 2], [6, 3], [1, 5]]),
      column: toLineCount([[], [], [], [3, 5], [2, 1, 3, 3, 1], [2, 2, 2, 3, 2], [1, 8, 2], [1, 1, 2, 1, 4], [2, 2, 1, 3, 2], [1, 1, 2, 2, 1], [1, 1, 1, 2, 1], [1, 2, 2, 1, 1], [1, 2, 1, 1, 2, 1, 1], [1, 1, 2, 1, 1], [5, 2, 6], [2, 2, 5, 1], [1, 3, 2, 2], [2, 2, 10], [3, 1], [4]]),
      isPuzzleDone: false,
    },
    shark: {
      title: "shark",
      size: "size3",
      board: Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => null)),
      row: toLineCount([[2], [3], [3, 4], [1, 2, 5, 2], [13, 2], [10], [1, 12], [1, 1, 14], [1, 15], [10, 2, 2], [4, 5, 2, 3], [4, 1, 3, 2, 2], [7, 2, 8], [8, 1, 8], [8, 2, 4, 3], [8, 2, 3], [4, 3, 1, 3], [5], [4], [2]]),
      column: toLineCount([[1, 3], [1, 1, 4], [1, 1, 1, 5], [2, 1, 7], [2, 8], [1, 9], [1, 4, 5], [1, 3, 5], [1, 5, 1], [1, 5, 1, 1, 1], [7, 5], [9, 1], [13], [9, 4], [9, 1, 3], [15, 4], [6, 3, 3], [1, 4, 1, 7], [16], [14]]),
      isPuzzleDone: false,
    },
  },
  sizes: {
    byId: {
      size1: {
        x: 10,
        y: 10,
        cell: 10,
      },
      size2: {
        x: 15,
        y: 15,
        cell: 8,
      },
      size3: {
        x: 20,
        y: 20,
        cell: 7,
      },
    },
    allIds: ["size1", "size2", "size3"],
  },
  puzzlesBySize: {
    size1: ["talk", "rabbit", "fencing", "mushroom", "pinocchio"],
    size2: ["butterfly", "hula-hoop", "mantis", "coconut", "bear"],
    size3: ["peanut", "puppy", "shark"],
  },
};

function puzzleReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_BOARD: {
      const { puzzle, x, y, cellType } = action.payload;
      const checkingPuzzle = Object.assign({}, state.puzzles[puzzle]);
      const checkingBoard = state.puzzles[puzzle].board.slice();

      checkingBoard[x][y] = cellType;

      const boardRow = checkingBoard[x].slice();
      const puzzleRow = checkingPuzzle.row[x].slice();
      const puzzleRowCounts = puzzleRow.map((lineCount) => lineCount.count);
      const rowLineCounts = getLineCount(boardRow);

      if (rowLineCounts.length > puzzleRowCounts.length) {
        puzzleRow.forEach((lineCount) => {
          lineCount.isDone = false;
        });
      } else if (puzzleRowCounts.join() === rowLineCounts.join()) {
        puzzleRow.forEach((lineCount) => {
          lineCount.isDone = true;
        });
      } else {
        const rowStartLineCounts = getStartLineCount(boardRow);
        const rowEndLineCounts = getStartLineCount(boardRow.slice().reverse());

        for (const [countIdx, lineCount] of puzzleRow.entries()) {
          lineCount.isDone = lineCount.count === rowStartLineCounts[countIdx];
        }
        for (const [countIdx, count] of rowEndLineCounts.entries()) {
          const puzzleRowIdx = puzzleRow.length - countIdx - 1;

          if (count === puzzleRowCounts[puzzleRowIdx]) {
            puzzleRow[puzzleRowIdx].isDone = true;
            continue;
          }

          break;
        }
      }

      const boardColumn = checkingBoard.map((row) => row[y]);
      const puzzleColumn = checkingPuzzle.column[y].slice();
      const puzzleColumnCounts = puzzleColumn.map((lineCount) => lineCount.count);
      const columnLineCounts = getLineCount(boardColumn);

      if (columnLineCounts.length > puzzleColumnCounts.length) {
        puzzleColumn.forEach((lineCount) => {
          lineCount.isDone = false;
        });
      } else if (puzzleColumnCounts.join() === columnLineCounts.join()) {
        puzzleColumn.forEach((lineCount) => {
          lineCount.isDone = true;
        });
      } else {
        const columnStartLineCounts = getStartLineCount(boardColumn);
        const columnEndLineCounts = getStartLineCount(boardColumn.slice().reverse());

        for (const [countIdx, lineCount] of puzzleColumn.entries()) {
          lineCount.isDone = lineCount.count === columnStartLineCounts[countIdx];
        }
        for (const [countIdx, count] of columnEndLineCounts.entries()) {
          const puzzleColumnIdx = puzzleColumn.length - countIdx - 1;

          if (count === puzzleColumnCounts[puzzleColumnIdx]) {
            puzzleColumn[puzzleColumnIdx].isDone = true;
            continue;
          }

          break;
        }
      }

      checkingPuzzle.row[x] = puzzleRow;
      checkingPuzzle.column[y] = puzzleColumn;

      let result = false;

      for (const columnCounts of checkingPuzzle.column) {
        for (const count of columnCounts) {
          if (!count.isDone) {
            break;
          }
        }
        result = true;
      }

      if (result) {
        for (const rowCounts of checkingPuzzle.row) {
          for (const count of rowCounts) {
            if (!count.isDone) {
              result = false;
              break;
            }
          }
        }
      }

      if (result) {
        for (const row of checkingBoard) {
          for (const [idx, cell] of row.entries()) {
            if (cell === PUZZLE.CELL_TYPE.EMPTY || !cell) {
              row[idx] = PUZZLE.CELL_TYPE.MARK;
            }
          }
        }
      }

      return Object.assign({}, {
        ...state,
        puzzles: {
          ...state.puzzles,
          [puzzle]: {
            ...checkingPuzzle,
            board: checkingBoard,
            isPuzzleDone: result,
          }
        },
      });
    }
    default:
      return Object.assign({}, state);
  }
}

function getStartLineCount(line) {
  let lastFilledOrMarkedIndex = 0;

  for (const cell of line) {
    if (
      !(cell === PUZZLE.CELL_TYPE.FILL
      || cell === PUZZLE.CELL_TYPE.MARK)
    ) {
      break;
    }
    lastFilledOrMarkedIndex += 1;
  }

  return getLineCount(line.slice(0, lastFilledOrMarkedIndex));
}

function getLineCount(line) {
  const result = [];
  let patternCount = 0;

  for (const [idx, ele] of line.entries()) {
    if (ele === PUZZLE.CELL_TYPE.FILL) {
      patternCount += 1;
    }

    if (
      (ele !== PUZZLE.CELL_TYPE.FILL || idx === line.length - 1)
      && patternCount !== 0
    ) {
      result.push(patternCount);
      patternCount = 0;
    }
  }

  return result;
};

export default puzzleReducer;
