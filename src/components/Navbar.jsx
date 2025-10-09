import { Link } from "react-router";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  const navbarArray = [
    { name: "Home", link: "/" },
    { name: "Profile", link: "/Profile" },
    { name: "Track progress", link: "/Track" },
    { name: "Replay Cast", link: "/ReplayCast" },
    { name: "My stats", link: "/myStats" },
    { name: "Cheese", link: "/Cheese" },
    { name: "Emoji", link: "/getEmoji" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 min-w-max ">
      <div className="flex justify-evenly space-x-5">
        {navbarArray.map(({ name, link }) => {
          return (
            <NavbarButton key={link} link={link}>
              {name}
            </NavbarButton>
          );
        })}
      </div>
    </nav>
  );
}
