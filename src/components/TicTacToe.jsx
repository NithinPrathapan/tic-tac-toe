import React from "react";
import "../App.css";
import useTicTacToe from "../hooks/UseTicTacToe";

const TicTacToe = () => {
  const [board, handleClick, resetGame, getStatusMessage, calculateWinner] =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        Player X Turn
        <button
          className="reset-button"
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
