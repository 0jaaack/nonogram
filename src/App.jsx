import { Routes, Route, Navigate } from "react-router-dom";

import GameList from "./GameList/GameList";
import SideBar from "./@shared/SideBar";

class App extends React.Component {
  render() {
    return (
      <div>
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
