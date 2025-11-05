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
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
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
