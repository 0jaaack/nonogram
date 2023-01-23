import { Routes, Route, Navigate } from "react-router-dom";
import GameList from "./GameList/GameList";

function App() {
  return (
    <Routes>
      <Route path="/games" element={<GameList />} />
      <Route path="/" element={<Navigate to="/games" />} />
    </Routes>
  );
}

export default App;
