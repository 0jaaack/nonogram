import React from "react";
import { connect } from "react-redux";

import PUZZLE from "../constants/puzzle";
import PuzzleCell from "./PuzzleCell";
import withParams from "../hoc/withParams";
import { checkBoard } from "../features/puzzle";

const BOARD = {
  DRAG: {
    LEFT: "BOARD/DRAG/LEFT",
    RIGHT: "BOARD/DRAG/RIGHT",
  },
  DRAG_TYPE: {
    ADD: "BOARD/DRAG_TYPE/ADD",
    REMOVE: "BOARD/DRAG_TYPE/REMOVE",
  },
};

class PuzzleBoard extends React.Component {
  constructor(props) {
    super(props);

    this.handleBoardMouseDown = this.handleBoardMouseDown.bind(this);
    this.handleBoardDragEnd = this.handleBoardDragEnd.bind(this);
    this.handleBoardDrag = this.handleBoardDrag.bind(this);
    this.handleBoardContextMenu = this.handleBoardContextMenu.bind(this);

    this.state = {
      drag: null,
      dragType: null,
      dragCellType: null,
    };
  }

  handleBoardContextMenu(event) {
    event.preventDefault();
  }

  handleBoardMouseDown(event) {
    if (
      event.target === event.currentTarget
      || !event.target.dataset.x
      || !event.target.dataset.y
    ) {
      return;
    }

    const { x, y, cellType } = event.target.dataset;

    if (cellType !== PUZZLE.CELL_TYPE.EMPTY) {
      this.props.checkBoard(x, y, PUZZLE.CELL_TYPE.EMPTY);
      this.setState({
        drag: BOARD.DRAG.RIGHT,
        dragType: BOARD.DRAG_TYPE.REMOVE,
        dragCellType: cellType,
      });

      return;
    }

    let addingCellType = null;

    if (event.nativeEvent.which === 1) {
      addingCellType = PUZZLE.CELL_TYPE.FILL;
    } else if (event.nativeEvent.which === 3) {
      addingCellType = PUZZLE.CELL_TYPE.MARK;
    }

    if (!addingCellType) {
      return;
    }

    this.props.checkBoard(x, y, addingCellType);
    this.setState({
      drag: BOARD.DRAG.RIGHT,
      dragType: BOARD.DRAG_TYPE.ADD,
      dragCellType: addingCellType,
    });
  }

  handleBoardDragEnd() {
    this.setState({
      drag: null,
      dragType: null,
      dragCellType: null,
    });
  }

  handleBoardDrag(event) {
    if (
      event.target === event.currentTarget
      || !this.state.drag
      || !this.state.dragType
      || !event.target.dataset.x
      || !event.target.dataset.y
    ) {
      return;
    }

    const { x, y, cellType } = event.target.dataset;

    if (
      this.state.dragType === BOARD.DRAG_TYPE.ADD
      && cellType === PUZZLE.CELL_TYPE.EMPTY
    ) {
      this.props.checkBoard(x, y, this.state.dragCellType);
      return;
    }

    if (
      this.state.dragType === BOARD.DRAG_TYPE.REMOVE
      && cellType === this.state.dragCellType
    ) {
      this.props.checkBoard(x, y, PUZZLE.CELL_TYPE.EMPTY);
      return;
    }
  }

  render() {
    const getCellType = (xPoint, yPoint) => {
      return this.props.board?.[xPoint]?.[yPoint] ?? PUZZLE.CELL_TYPE.EMPTY;
    };

    return (
      <div
        className="flex"
        onMouseDown={this.handleBoardMouseDown}
        onMouseUp={this.handleBoardDragEnd}
        onMouseLeave={this.handleBoardDragEnd}
        onMouseOver={this.handleBoardDrag}
        onContextMenu={this.handleBoardContextMenu}
      >
        {Array.from({ length: this.props.size.y }, (_, y) => (
          <div className={`flex flex-col`} key={y}>
            {Array.from({ length: this.props.size.x }, (_, x) => (
              <PuzzleCell
                key={`${x}${y}`}
                x={x}
                y={y}
                cellType={getCellType(x, y)}
                cellSize={this.props.size.cell}
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
    board: puzzle.puzzles[params.title].board,
    size: puzzle.sizes.byId[puzzle.puzzles[params.title].size],
  }),
  (dispatch, { params }) => ({
    checkBoard: (x, y, cellType) => dispatch(checkBoard({
      x,
      y,
      cellType,
      puzzle: params.title,
    })),
  }),
)(PuzzleBoard);

export default withParams(ConnectedPuzzleBoard);
