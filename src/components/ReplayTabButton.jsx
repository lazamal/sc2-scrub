import { buttonStyle } from "../styles";

export default function ReplayTabButton({ children, onSelect }) {
  return (
    <button onClick={onSelect} className={buttonStyle}>
      {children}
    </button>
  );
}
