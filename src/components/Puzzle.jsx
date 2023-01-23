import React from "react";

import PuzzleRow from "./PuzzleRow";
import PuzzleColumn from "./PuzzleColumn";
import PuzzleBoard from "./PuzzleBoard";

class Puzzle extends React.Component {
  render() {
    const column = [[2, 1], [3], [3], [2], [2]];
    const row = [[4], [4], [2], [1], [1, 1]];

    return (
      <div className="flex flex-col overflow-scroll">
        <h2>보드 타이틀</h2>
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

export default Puzzle;
