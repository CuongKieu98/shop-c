import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.js'
import Playlist from "./pages/Playlist/Playlist.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play-list" element={<Playlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
