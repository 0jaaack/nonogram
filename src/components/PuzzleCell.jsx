import React from "react";
import PUZZLE from "../constants/puzzle";

class PuzzleCell extends React.Component {
  render() {
    const cellProps = {
      "data-x": this.props.x,
      "data-y": this.props.y,
      "data-cell-type": this.props.cellType,
      style: {
        width: `${this.props.cellSize * 0.25}rem`,
        height: `${this.props.cellSize * 0.25}rem`,
      },
    };
    const cellClassNames = `border cursor-pointer bg-white`;

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
              width: `${this.props.cellSize * 0.25}rem`,
              height: `${this.props.cellSize * 0.25}rem`,
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
