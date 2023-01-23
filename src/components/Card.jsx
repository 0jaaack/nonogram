import React from "react";
import withNavigate from "../hoc/withNavigate";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="w-20 h-20 border cursor-pointer"
        onClick={() => this.props.navigate(`/puzzles/${this.props.value.title}`)}
      >
        <div>{this.props.value.size}</div>
        <h3>{this.props.value.title}</h3>
      </div>
    );
  }
}

export default withNavigate(Card);
