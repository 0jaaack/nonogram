import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SideBar from "./components/SideBar";
import PuzzleCollection from "./components/PuzzleCollection";
import Puzzle from "./components/Puzzle";

class App extends React.Component {
  render() {
    return (
      <div className="flex w-screen h-screen overflow-scroll bg-nonogram-black">
        <SideBar />
        <Routes>
          <Route path="/puzzles" element={<PuzzleCollection />} />
          <Route path="/puzzles/:slug" element={<Puzzle />} />
          <Route path="/" element={<Navigate to="/puzzles" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
