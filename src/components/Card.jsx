import React from "react";
import withNavigate from "../hoc/withNavigate";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="flex items-center justify-center w-48 h-60 bg-gradient-to-tr from-gray-900 to-cyan-800 rounded-xl cursor-pointer"
        style={{ boxShadow: "rgba(155, 155, 144, 0.2) 0px 7px 29px 0px" }}
        onClick={() => this.props.navigate(`/puzzles/${this.props.value.title}`)}
      >
        <h3 className="text-3xl italic uppercase font-bold text-center">{this.props.value.title}</h3>
      </div>
    );
  }
}

export default withNavigate(Card);
