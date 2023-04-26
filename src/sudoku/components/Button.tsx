import { ButtonHTMLAttributes } from "react";
import module from "../styles/button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ onClick }: Props) {
  return (
    <button onClick={onClick} className={module.btn}>
      Solve
    </button>
  );
}

export default Button;
