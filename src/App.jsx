import { useState } from "react";
import "./App.css";

function Squre({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 ml-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) return;
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Squre value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Squre value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Squre value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Squre value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Squre value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Squre value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Squre value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Squre value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Squre value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
