import { Link } from "react-router";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <nav className="flex w-7xl">
      <NavbarButton link="/Profile">Profile</NavbarButton>
      <NavbarButton link="/ReplayCast">Replay Cast</NavbarButton>
      <NavbarButton link="/MyBest">My Best</NavbarButton>
    </nav>
  );
}
