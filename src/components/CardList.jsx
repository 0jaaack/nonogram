import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pb-4">
        <h2 className="text-3xl font-bold">
          {this.props.size}
        </h2>
        <ul className="flex gap-4 p-2 pt-3">
          {this.props.puzzles.map((puzzle) => (
            <Card
              value={puzzle}
              path={`/puzzles/${puzzle.slug}`}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ puzzle }, { option }) => ({
    size: puzzle.sizes.byId[option],
    puzzles: puzzle.puzzlesBySize[option].map((puzzleId) => ({
      ...puzzle.puzzles[puzzleId],
      size: puzzle.sizes.byId[option],
    })),
  }),
)(CardList);
