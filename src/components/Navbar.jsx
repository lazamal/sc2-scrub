import { Link } from "react-router";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 ">
      <div className="flex  justify-evenly space-x-6">
        <NavbarButton link="/">Home</NavbarButton>
        <NavbarButton link="/Profile">Profile</NavbarButton>
        <NavbarButton link="/Track">Track progress</NavbarButton>
        <NavbarButton link="/ReplayCast">Replay Cast</NavbarButton>
        <NavbarButton link="/MyBest">My Best</NavbarButton>
        <NavbarButton link="/Cheese">Cheese</NavbarButton>
      </div>
    </nav>
  );
}
