import React from "react";
import PUZZLE from "../constants/puzzle";

class PuzzleCell extends React.Component {
  handleCellLeftClick = () => {
    if (this.props.cellType !== PUZZLE.CELL_TYPE.EMPTY) {
      return this.props.onBoardClick(PUZZLE.CELL_TYPE.EMPTY);
    }
    this.props.onBoardClick(PUZZLE.CELL_TYPE.FILL);
  };

  handleCellRightClick = (event) => {
    event.preventDefault();
    if (this.props.cellType !== PUZZLE.CELL_TYPE.EMPTY) {
      return this.props.onBoardClick(PUZZLE.CELL_TYPE.EMPTY);
    }
    this.props.onBoardClick(PUZZLE.CELL_TYPE.MARK);
  };

  render() {
    const handleCellLeftClick = this.handleCellLeftClick.bind(this);
    const handleCellRightClick = this.handleCellRightClick.bind(this);
    const cellProps = {
      onClick: handleCellLeftClick,
      onContextMenu: handleCellRightClick,
    };
    const cellClassNames = `border cursor-pointer bg-white w-${this.props.cellSize} h-${this.props.cellSize}`;

    switch (this.props.cellType) {
      case PUZZLE.CELL_TYPE.EMPTY:
        return (
          <div {...cellProps} className={cellClassNames} />
        );
      case PUZZLE.CELL_TYPE.FILL:
        return (
          <div {...cellProps} className={`${cellClassNames} bg-black`} />
        );
      case PUZZLE.CELL_TYPE.MARK:
        return (
          <div
            {...cellProps}
            className={cellClassNames}
            style={{
              background: `
                linear-gradient(
                  135deg,
                  transparent calc(50% - 1px),
                  red 50%,
                  transparent calc(50% + 1px)
                ),
                linear-gradient(
                  45deg,
                  white calc(50% - 1px),
                  red 50%,
                  white calc(50% + 1px)
                )
              `,
            }}
          />
        );
      default:
        return (
          <div {...cellProps} className={`${cellClassNames} bg-white`} />
        );
    }
  }
}

export default PuzzleCell;
