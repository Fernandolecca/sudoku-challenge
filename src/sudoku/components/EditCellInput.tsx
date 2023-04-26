import { InputHTMLAttributes, useEffect, useRef } from "react";
import { Coord } from "../types";
import module from "../styles/input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  activeCellCoords: Coord | null;
}

function EditCellInput({ activeCellCoords, onChange }: Props) {
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editInputRef.current!.value = "";
    editInputRef.current!.focus();
  }, [activeCellCoords]);

  return (
    <input
      className={module.cellInput}
      type="number"
      min={1}
      max={9}
      onChange={onChange}
      ref={editInputRef}
    />
  );
}

export default EditCellInput;
