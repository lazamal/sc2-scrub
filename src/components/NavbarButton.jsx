import { Link } from "react-router";
import { buttonStyle } from "../styles";

export default function NavbarButton({ link, children }) {
  return (
    <Link to={link}>
      <span className={buttonStyle}>{children}</span>
    </Link>
  );
}
