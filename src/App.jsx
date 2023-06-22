import './App.css';
import { Header } from "./Components/header";
import { Footer } from "./Components/footer";
import { Home } from "./Components/home";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [game, setGame] = useState(new Chess());
  const makeMove = (move) => {
    const result = game.move(move);
    if (result === null) {
      return false;
    }
    setGame(new Chess(game.fen()));
    return true;
  };
  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isCheckmate()) {
      const winner = game.turn() === 'w' ? 'Black' : 'White';
      alert(`Checkmate! ${winner} wins.`);
    } else if (game.isDraw() || game.isStalemate()) {
      alert('Draw');
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeMove(possibleMoves[randomIndex]);
  }  
  function onDrop(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
  if (move === null) {
    new Chess(game.fen());
    return;
  }
  makeRandomMove();
}
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <Home />
            </>
          } />
          <Route exact path="/play" element={
            <div>
              <div className='container' style={{ height: '83vh' }}>
                <div style={{ display: 'flex' }}>
                    <Chessboard id="BasicBoard" boardWidth={500} position={game.fen()} onPieceDrop={onDrop} />
                    <div>
                  </div>
                </div>
              </div>
              </div>
          } />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
export default App;
