export type Cell = "." | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type CellState = Record<string, Cell>;

export const initialState: CellState = {
  fill: 9,
  empty: ".",
};

export type Board = Cell[][];
