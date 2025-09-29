import Navbar from "../components/Navbar";

export default function Track() {
  const progressTable = [
    "Build name",
    "Target hit benchmark",
    "Best time hit",
    "Map name",
    "W/L ratio",
    "Cheese rating",
    "Standard rating",
  ];
  return (
    <div className="h-screen">
      <Navbar />

      <div className="pt-6 flex flex-row gap-20">
        {progressTable.map((headline) => {
          return (
            <p className="text-white font-semibold" key={headline}>
              {headline}
            </p>
          );
        })}
      </div>
    </div>
  );
}
