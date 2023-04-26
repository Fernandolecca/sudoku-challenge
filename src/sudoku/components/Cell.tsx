import { Cell as CellType, Coord, cellEmptyState } from "../types";
import module from "../styles/cell.module.css";

interface Props {
  value: CellType;
  coords: Coord;
  isOpenToEdit: boolean;
  onActiveCellCoords: (coords: Coord) => void;
}

function Cell({ value, coords, isOpenToEdit, onActiveCellCoords }: Props) {
  return (
    <div
      className={`${module.cell} ${isOpenToEdit && module.cellOpen}`}
      onClick={() => onActiveCellCoords(coords)}
    >
      {value !== cellEmptyState && value}
    </div>
  );
}

export default Cell;
