import Cell from "./Cell";
import { isSameCoords } from "@/helpers/sudoku";
import { Board, Coord } from "../types";
import module from "../styles/grid.module.css";

interface Props {
  board: Board;
  activeCellCoords: Coord | null;
  onActiveCellCoords: (coords: Coord) => void;
}

function Grid({ board, activeCellCoords, onActiveCellCoords }: Props) {
  return (
    <div className={module.grid}>
      {board.map((row, i) =>
        row.map((cell, j) => (
          <Cell
            key={`${Math.random()}.${i + j}`}
            value={cell}
            isOpenToEdit={isSameCoords([i, j], activeCellCoords ?? [-1, -1])}
            coords={[i, j]}
            onActiveCellCoords={onActiveCellCoords}
          />
        ))
      )}
    </div>
  );
}

export default Grid;
