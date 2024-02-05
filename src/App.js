import Home from "./components/Home";
import Game from "./components/Game";
import { Routes, Route } from "react-router-dom";
import Heart from "./components/Heart";
import HeartBreak from "./components/HeartBreak";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/heart" element={<Heart />}></Route>
        <Route path="/heart-break" element={<HeartBreak />}></Route>
      </Routes>
    </div>
  );
}

export default App;
