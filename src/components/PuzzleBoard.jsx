import React from "react";
import { connect } from "react-redux";

import PUZZLE from "../constants/puzzle";
import PuzzleCell from "./PuzzleCell";
import withParams from "../hoc/withParams";
import { checkBoard } from "../features/puzzle";

class PuzzleBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBoardClick = (x, y, cellType) => {
    this.props.checkBoard(x, y, cellType);
  };

  render() {
    const getCellType = (x, y) => {
      return this.props.board?.[x]?.[y] ?? PUZZLE.CELL_TYPE.EMPTY;
    };

    return (
      <div className="flex">
        {Array.from(Array(this.props.row), (_, y) => (
          <div className={`flex flex-col`} key={y}>
            {Array.from(Array(this.props.column), (_, x) => (
              <PuzzleCell
                key={`${x}${y}`}
                onBoardClick={(cellType) => this.handleBoardClick(x, y, cellType)}
                cellType={getCellType(x, y)}
                cellSize={this.props.cellSize}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const ConnectedPuzzleBoard = connect(
  ({ puzzle }, { params }) => ({
    board: puzzle.puzzles[params.slug].board,
  }),
  (dispatch, { params }) => ({
    checkBoard: (x, y, cellType) => dispatch(checkBoard({
      x,
      y,
      cellType,
      puzzle: params.slug,
    })),
  }),
)(PuzzleBoard);

export default withParams(ConnectedPuzzleBoard);
