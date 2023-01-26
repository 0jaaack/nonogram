import React from "react";
import { connect } from "react-redux";

import PuzzleRow from "./PuzzleRow";
import PuzzleColumn from "./PuzzleColumn";
import PuzzleBoard from "./PuzzleBoard";
import CompletePuzzleModal from "./CompletePuzzleModal";
import withParams from "../hoc/withParams";

class Puzzle extends React.Component {
  render() {
    const { title, row, column, isPuzzleDone } = this.props.puzzle;

    return (
      <>
        {isPuzzleDone && <CompletePuzzleModal />}
        <div className="flex flex-col w-full h-full px-10 py-20 overflow-scroll">
          <h2 className="text-5xl font-bold">{title}</h2>
          <div className="flex p-10">
            <PuzzleRow value={row} />
            <div>
              <PuzzleColumn value={column} />
              <PuzzleBoard row={row.length} column={column.length} cellSize="10" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const ConnectedPuzzle = connect(
  ({ puzzle }, { params }) => ({
    puzzle: puzzle.puzzles[params.slug],
  }),
)(Puzzle);

export default withParams(ConnectedPuzzle);
