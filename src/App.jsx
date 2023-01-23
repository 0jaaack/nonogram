import { Routes, Route, Navigate } from "react-router-dom";
import GameList from "./GameList/GameList";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/games" element={<GameList />} />
        <Route path="/" element={<Navigate to="/games" />} />
      </Routes>
    );
  }
}

export default App;
