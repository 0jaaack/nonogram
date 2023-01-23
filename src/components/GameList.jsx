import React from "react";
import GameByOptionList from "./GameByOptionList";

class GameList extends React.Component {
  render() {
    return (
      <div className="flex flex-col w-full h-full p-6">
        <GameByOptionList option="10 x 10" />
        <GameByOptionList option="10 x 10" />
      </div>
    );
  }
}

export default GameList;
