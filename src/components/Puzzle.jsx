import React from "react";
import { connect } from "react-redux";

import PuzzleRow from "./PuzzleRow";
import PuzzleColumn from "./PuzzleColumn";
import PuzzleBoard from "./PuzzleBoard";
import withParams from "../hoc/withParams";

class Puzzle extends React.Component {
  render() {
    const { title, row, column } = this.props.puzzle;
    return (
      <div className="flex flex-col overflow-scroll">
        <h2>{title}</h2>
        <div className="flex">
          <PuzzleRow value={row} />
          <div>
            <PuzzleColumn value={column} />
            <PuzzleBoard row={row.length} column={column.length} cellSize="6" />
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedPuzzle = connect(
  ({ puzzle }, { params }) => ({
    puzzle: puzzle.puzzles[params.slug],
  }),
)(Puzzle);

export default withParams(ConnectedPuzzle);
