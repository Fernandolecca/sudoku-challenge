import { ChangeEvent } from "react";
import { Grid, EditCellInput, Button } from "./sudoku/components/";
import { useSudoku } from "./sudoku/hooks/useSudoku";
import { getPuzzleSolution } from "./sudoku/services/sudoku";
import { Coord } from "./sudoku/types";
import {
  mapBoardToString,
  mapStringToBoard,
  setValueInCell,
} from "./helpers/sudoku";

import module from "./app.module.css";

function App() {
  const { board, activeCellCoords, setBoard, setActiveCellCoords } =
    useSudoku();

  const changeActiveCellCoords = (coords: Coord) => {
    setActiveCellCoords(coords);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.valueAsNumber;

    if (inputValue < 10) {
      const newBoard = setValueInCell(board, activeCellCoords!, inputValue);
      setBoard(newBoard);
    }
  };

  const solvePuzzle = async () => {
    const puzzle = mapBoardToString(board);
    const solution = await getPuzzleSolution(puzzle);
    const newBoard = mapStringToBoard(solution);
    setActiveCellCoords(null);
    setBoard(newBoard);
  };

  return (
    <main className={module.app}>
      <h1>Sudoku solver</h1>
      <Grid
        board={board}
        activeCellCoords={activeCellCoords}
        onActiveCellCoords={changeActiveCellCoords}
      />
      <Button onClick={solvePuzzle} />
      <EditCellInput
        activeCellCoords={activeCellCoords}
        onChange={handleChange}
      />
    </main>
  );
}

export default App;
