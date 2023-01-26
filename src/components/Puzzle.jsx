import React from "react";
import { connect } from "react-redux";

import PuzzleRow from "./PuzzleRow";
import PuzzleColumn from "./PuzzleColumn";
import PuzzleBoard from "./PuzzleBoard";
import CompletePuzzleModal from "./CompletePuzzleModal";
import withParams from "../hoc/withParams";

class Puzzle extends React.Component {
  render() {
    const puzzleTitle = this.props.params.title.replace(/-/g, " ");
    const { row, column, size, isPuzzleDone } = this.props.puzzle;

    return (
      <>
        {isPuzzleDone && <CompletePuzzleModal />}
        <div className="flex flex-col w-full h-full px-10 py-20 overflow-scroll">
          <h2 className="text-5xl font-bold">{puzzleTitle}</h2>
          <div className="flex p-10">
            <PuzzleRow value={row} size={size.cell} />
            <div>
              <PuzzleColumn value={column} size={size.cell} />
              <PuzzleBoard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const ConnectedPuzzle = connect(
  ({ puzzle }, { params }) => ({
    puzzle: {
      ...puzzle.puzzles[params.title],
      size: puzzle.sizes.byId[puzzle.puzzles[params.title].size],
    },
  }),
)(Puzzle);

export default withParams(ConnectedPuzzle);
