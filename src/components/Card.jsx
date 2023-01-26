import React from "react";
import withNavigate from "../hoc/withNavigate";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardSolvedStyle = this.props.puzzle.isPuzzleDone
      ? "from-emerald-500 to-stone-400"
      : "from-gray-700 to-cyan-600";

    return (
      <div
        className={`flex flex-none items-center justify-center w-48 h-60 bg-gradient-to-tr rounded-xl cursor-pointer ${cardSolvedStyle}`}
        style={{ boxShadow: "rgba(155, 155, 144, 0.2) 0px 7px 29px 0px" }}
        onClick={() => this.props.navigate(`/puzzles/${this.props.puzzle.title}`)}
      >
        <h3 className="text-2xl italic uppercase font-bold text-center">{this.props.puzzle.title}</h3>
      </div>
    );
  }
}

export default withNavigate(Card);
