import React from "react";
import { Link } from "react-router-dom";
import withModal from "../hoc/withModal";

class CompletePuzzleModal extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center gap-16 w-1/3 h-1/3 rounded-2xl bg-neutral-600">
        <h1 className="text-3xl font-bold">🥳 Complete the puzzle!</h1>
        <div className="flex gap-10">
          <button className="text-xl italic font-medium" onClick={this.props.closeModal}>확인</button>
          <Link className="text-xl italic font-medium" to="/puzzles">Home</Link>
        </div>
      </div>
    );
  }
}

export default withModal(CompletePuzzleModal);
