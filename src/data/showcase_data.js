import trackImage from "../assets/track.jpg";
import castImage from "../assets/cast.webp";
import bestImage from "../assets/best.avif";
import cheeseImage from "../assets/cheese.jpg";

export const SHOWCASE_DATA = [
  {
    key: "track",
    title: "Build order execusion",
    description:
      "track your progression in excecuting starcraft 2 build orders using this awesome tool!",
    img: trackImage,
    buttonLink: "http://localhost:5173/Track",
  },
  {
    key: "cast",
    title: "Personal replay cast",
    description:
      "Want to know how it feels to be a pro Starcraft 2 player? upload your replay and get your game cast by AI",
    img: castImage,
    buttonLink: "http://localhost:5173/ReplayCast",
  },
  {
    key: "stats",
    title: "My stats",
    description:
      "preparing for a tournement? Get a your focus on what to improve",
    img: bestImage,
    buttonLink: "http://localhost:5173/MyStats",
  },
  {
    key: "cheese",
    title: "Cheese of the month",
    description:
      "Looking to spice up your play? get a random cheese strategy to have fun with",
    img: cheeseImage,
    buttonLink: "http://localhost:5173/Cheese",
  },
];
