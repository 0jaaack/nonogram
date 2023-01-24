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
    "talk": {
      title: "talk",
      slug: "talk",
      size: "size1",
      cellSize: 6,
      column: toLineCount([[7], [2, 2, 1], [4, 1], [1], [5], [1, 1], [1, 1, 1, 1], [1, 1, 2], [1, 2], [5]]),
      row: toLineCount([[6], [1, 1], [1, 2, 1], [2, 1, 1], [3, 3, 2], [1, 1, 2], [4, 2], [3], [1], [3]]),
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null)),
      isPuzzleDone: false,
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
    case CHECK_BOARD: {
      const { puzzle, x, y, cellType } = action.payload;
      const checkingPuzzle = Object.assign({}, state.puzzles[puzzle]);
      const checkingBoard = state.puzzles[puzzle].board.slice();

      checkingBoard[x][y] = cellType;

      const boardRow = checkingBoard[x].slice();
      const puzzleRow = checkingPuzzle.row[x].slice();
      const puzzleRowCounts = puzzleRow.map((lineCount) => lineCount.count);

      if (puzzleRowCounts.join() === getLineCount(boardRow).join()) {
        puzzleRow.forEach((lineCount) => {
          lineCount.isDone = true;
        });
      } else {
        const rowStartLineCounts = getStartLineCount(boardRow);
        const rowEndLineCounts = getStartLineCount(boardRow.slice().reverse());

        for (const [countIdx, lineCount] of puzzleRow.entries()) {
          lineCount.isDone = lineCount.count === rowStartLineCounts[countIdx];
        };
        for (const [countIdx, count] of rowEndLineCounts.entries()) {
          const puzzleRowIdx = puzzleRow.length - countIdx - 1;

          if (count === puzzleRowCounts[puzzleRowIdx]) {
            puzzleRow[puzzleRowIdx].isDone = true;
            continue;
          }

          break;
        };
      }

      const boardColumn = checkingBoard.map((row) => row[y]);
      const puzzleColumn = checkingPuzzle.column[y].slice();
      const puzzleColumnCounts = puzzleColumn.map((lineCount) => lineCount.count);

      if (puzzleColumnCounts.join() === getLineCount(boardColumn).join()) {
        puzzleColumn.forEach((lineCount) => {
          lineCount.isDone = true;
        });
      } else {
        const columnStartLineCounts = getStartLineCount(boardColumn);
        const columnEndLineCounts = getStartLineCount(boardColumn.slice().reverse());

        for (const [countIdx, lineCount] of puzzleColumn.entries()) {
          lineCount.isDone = lineCount.count === columnStartLineCounts[countIdx];
        };
        for (const [countIdx, count] of columnEndLineCounts.entries()) {
          const puzzleColumnIdx = puzzleColumn.length - countIdx - 1;

          if (count === puzzleColumnCounts[puzzleColumnIdx]) {
            puzzleColumn[puzzleColumnIdx].isDone = true;
            continue;
          }

          break;
        };
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
