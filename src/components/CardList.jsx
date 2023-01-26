import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div className="pb-4">
        <h2 className="text-3xl font-bold">
          {this.props.size.x}
          {" X "}
          {this.props.size.y}
        </h2>
        <ul className="flex gap-4 p-5 pt-3 pb-8 overflow-y-scroll">
          {this.props.puzzles.map((puzzle) => (
            <Card
              key={puzzle.title}
              puzzle={puzzle}
              path={`/puzzles/${puzzle.title}`}
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
