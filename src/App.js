import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IPTracer from './Components/IPTracer/IPTracer';
import Home from './Components/Home/Home';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import Triangle from './Components/SierpinskiTriangle/Triangle';
import MovieAPI from './Components/MovieAPI/MovieAPI';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iptracker" element={<IPTracer />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        {/* <Route path="/movieapi" element={<MovieAPI />} /> */}
        <Route path="/triangle" element={<Triangle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
