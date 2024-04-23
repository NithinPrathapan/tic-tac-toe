import React, { useState } from "react";
import "./App.css";

const initialBoard = () => Array(9).fill(null);
const App = () => {
  const [board, setBoard] = useState(initialBoard());
  return (
    <div className="game">
      <div className="status">
        Player X Turn
        <button>Reset Game</button>
      </div>
      <div className="board">
        {board.map((_, index) => {
          return (
            <button className="cell" key={index}>
              X
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
