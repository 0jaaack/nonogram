import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <nav className="flex flex-col w-60 pt-8 px-5 bg-black">
        <Link
          to="/puzzles"
          className="py-2 pb-4 text-3xl italic font-bold"
        >
          네모네모로직
        </Link>
        <Link
          to="/puzzles"
          className="text-xl pl-4 py-2"
        >
          Home
        </Link>
        <Link
          to="/puzzles"
          className="text-lg pl-4 py-2"
        >
          최근 퍼즐로 가기
        </Link>
      </nav>
    );
  }
}

export default SideBar;
