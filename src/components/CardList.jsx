import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div>
        <h2>10 x 10</h2>
        <ul className="flex">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    );
  }
}

export default CardList;
