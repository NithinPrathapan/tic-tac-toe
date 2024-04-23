import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [];

  const calculateWinner = (currentBoard) => {
    console.log("called");
  };
  const handleClick = (index) => {
    console.log("called handleClick");
    // checkwinner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];

    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };
  const getStatusMessage = () => {};
  const resetGame = () => {};

  return [board, handleClick, resetGame, getStatusMessage, calculateWinner];
};

export default useTicTacToe;
