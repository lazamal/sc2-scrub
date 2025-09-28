import { Link } from "react-router";

export default function NavbarButton({ link, children }) {
  return (
    <Link to={link}>
      <span
        className="px-5 py-2 
  bg-cyan-600 text-black font-bold uppercase 
  border border-cyan-400 rounded 
  hover:bg-cyan-500 hover:shadow-[0_0_10px_#22d3ee] 
  active:scale-95 transition"
      >
        {children}
      </span>
    </Link>
  );
}
