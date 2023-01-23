import React from "react";
import { connect } from "react-redux";
import CardList from "./CardList";

class PuzzleCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col w-full h-full p-6">
        {this.props.allSizeIds.map((sizeId) => (
          <CardList option={sizeId} />
        ))}
      </div>
    );
  }
}

export default connect(
  ({ puzzle }) => ({
    allSizeIds: puzzle.sizes.allIds,
  }),
)(PuzzleCollection);
