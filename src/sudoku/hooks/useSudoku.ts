import { useState } from "react";
import { Board, Coord } from "../types";
import { generateEmptyBoard } from "@/helpers/sudoku";

export function useSudoku() {
  const [board, setBoard] = useState<Board>(generateEmptyBoard(9));
  const [activeCellCoords, setActiveCellCoords] = useState<Coord | null>(null);

  return {
    board,
    activeCellCoords,
    setBoard,
    setActiveCellCoords,
  };
}
