import { Board, Cell } from "@/sudoku/types/";
import { useState } from "react";
import module from "./sudoku/styles/board.module.css";

const getLenghtArray = (size: number) => {
  return new Array(size);
};

const generateEmptyBoard = (size: number, cellValue: Cell = "."): Board => {
  return getLenghtArray(size).fill(getLenghtArray(size).fill(cellValue));
};

const getRandomDigit = () => {};

function App() {
  const [board, setBoard] = useState<Board>(generateEmptyBoard(9));

  return (
    <div>
      <div className={module.grid}>
        {board.map((row) =>
          row.map((cell, i) => (
            <div className={module.cell} key={i}>
              {cell}
            </div>
          ))
        )}
      </div>
      <p>App works!!</p>
    </div>
  );
}

export default App;
