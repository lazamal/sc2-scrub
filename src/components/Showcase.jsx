import { Link } from "react-router";

export default function Showcase({ data }) {
  const { title, description, img, buttonLink } = data;
  return (
    <span className="flex flex-col w-3xl h-80 bg-blue-950">
      <h2 className="text-4xl pb-2">{title}</h2>
      <p>{description}</p>
      <div className="flex flex-row justify-evenly pt-6">
        <Link to={buttonLink} className="pt-10">
          <button>Try it!</button>
        </Link>
        <img className="h-45 rounded-tl-sm" src={img} alt="picture" />
      </div>
    </span>
  );
}
