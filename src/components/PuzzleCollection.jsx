import React from "react";
import CardList from "./CardList";

class PuzzleCollection extends React.Component {
  render() {
    return (
      <div className="flex flex-col w-full h-full p-6">
        <CardList option="10 x 10" />
        <CardList option="10 x 10" />
      </div>
    );
  }
}

export default PuzzleCollection;
