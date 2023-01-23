import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.size}</h2>
        <ul className="flex">
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
