import React from "react";
import { connect } from "react-redux";
import CardList from "./CardList";

class PuzzleCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overflow-scroll flex flex-col w-full h-full py-14 px-8">
        {this.props.allSizeIds.map((sizeId) => (
          <CardList key={sizeId} option={sizeId} />
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
