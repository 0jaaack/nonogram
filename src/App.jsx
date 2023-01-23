import { Routes, Route, Navigate } from "react-router-dom";

import GameList from "./components/GameList";
import SideBar from "./components/SideBar";

class App extends React.Component {
  render() {
    return (
      <div className="flex w-screen h-screen overflow-scroll bg-nonogram-black">
        <SideBar />
        <Routes>
          <Route path="/games" element={<GameList />} />
          <Route path="/" element={<Navigate to="/games" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
