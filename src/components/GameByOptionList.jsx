import React from "react";
import GameCardCell from "./GameCardCell";

class GameByOptionList extends React.Component {
  render() {
    return (
      <div>
        <h2>10 x 10</h2>
        <ul className="flex">
          <li>
            <GameCardCell />
          </li>
          <li>
            <GameCardCell />
          </li>
        </ul>
      </div>
    );
  }
}

export default GameByOptionList;
