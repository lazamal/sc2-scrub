import Navbar from "../components/Navbar";
import SingleBuild from "../components/SingleBuild";
import { BUILD_DATA } from "../data/build_data";

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

      <div className="pt-6 grid grid-cols-7 gap-6 ">
        {progressTable.map((headline) => {
          return (
            <p className="text-white font-semibold" key={headline}>
              {headline}
            </p>
          );
        })}

        {BUILD_DATA.map((singleBuildData) => (
          <SingleBuild key={singleBuildData.id} data={singleBuildData} />
        ))}
      </div>
    </div>
  );
}
