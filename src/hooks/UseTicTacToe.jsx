import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Top-left to bottom-right diagonal
    [2, 4, 6], // To
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    console.log("called handleClick");
    // checkwinner
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;
    const newBoard = [...board];

    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins`;
    if (!board.includes(null)) return "its a draw";
    return `Player ${isNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
  };

  return [board, handleClick, resetGame, getStatusMessage, calculateWinner];
};

export default useTicTacToe;
