import { Link } from "react-router";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  const navbarArray = [
    { name: "Home", link: "/" },
    { name: "Profile", link: "/Profile" },
    { name: "Track progress", link: "/Track" },
    { name: "Replay Cast", link: "/ReplayCast" },
    { name: "My Best", link: "/myBest" },
    { name: "Cheese", link: "/Cheese" },
    { name: "Emoji", link: "/getEmoji" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 ">
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

{
  /* swapped this code for the map */
}
{
  /* <NavbarButton link="/">Home</NavbarButton>
        <NavbarButton link="/Profile">Profile</NavbarButton>
        <NavbarButton link="/Track">Track progress</NavbarButton>
        <NavbarButton link="/ReplayCast">Replay Cast</NavbarButton>
        <NavbarButton link="/MyBest">My Best</NavbarButton>
        <NavbarButton link="/Cheese">Cheese</NavbarButton> */
}
