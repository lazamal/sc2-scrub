import { Link } from "react-router";
import { buttonStyle } from "../styles";

export default function Showcase({ data }) {
  const { key, title, description, img, buttonLink } = data;

  return (
    <span className="flex flex-col w-3xl h-80 bg-blue-950">
      <h2 className="text-4xl pb-2">{title}</h2>
      <p>{description}</p>
      <div className="flex flex-row justify-evenly items-center pt-6">
        <Link to={buttonLink} className={`pt-17 text-3xl`}>
          Try it!
        </Link>
        <img className="h-45 rounded-tl-sm" src={img} alt="picture" />
      </div>
    </span>
  );
}
