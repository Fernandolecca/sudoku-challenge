import { Cell, Board, Coord } from "@/sudoku/types";

export const getFixedLenghtArray = (size: number) => {
  return new Array(size).fill(null);
};

export const generateEmptyBoard = (
  size: number,
  cellValue: Cell = 0
): Board => {
  return getFixedLenghtArray(size).map(() =>
    getFixedLenghtArray(size).fill(cellValue)
  );
};

export const isSameCoords = (firstCoords: Coord, secondCoords: Coord) => {
  return firstCoords.toString() === secondCoords.toString();
};

export const setValueInCell = (
  board: Board,
  cellCoord: Coord,
  value: number
) => {
  const [x, y] = cellCoord;

  return board.map((row, rowIndex) => {
    if (rowIndex !== x) {
      return row;
    }

    row[y] = value as Cell;
    return [...row];
  });
};

export const mapBoardToString = (board: Board): string => {
  const plainBoard = board.flat();

  return plainBoard.reduce(
    (acc, digit) => (digit < 1 ? acc + "." : acc + digit),
    ""
  );
};

export const mapStringToBoard = (solution: string): Board => {
  const plainBoard = solution.split("").map((val) => Number(val));
  const board: Board = [];
  let startSection = 0;
  let sectionNumber = 1;

  while (sectionNumber < 10) {
    board.push(plainBoard.slice(startSection, 9 * sectionNumber) as Cell[]);
    startSection = 9 * sectionNumber;
    sectionNumber++;
  }

  return board;
};
