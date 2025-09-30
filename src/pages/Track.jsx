import { useState } from "react";
import Navbar from "../components/Navbar";
import SingleBuild from "../components/SingleBuild";
import { BUILD_DATA } from "../data/build_data";

export default function Track() {
  const [totalBuilds, setTotalBuilds] = useState([]);

  const progressHeadlines = [
    "Build name",
    "Target hit benchmark",
    "Best time hit",
    "Map name",
    "W/L ratio",
    "Cheese rating",
    "Standard rating",
  ];

  function addBuild() {
    console.log("added build");
    setTotalBuilds([...totalBuilds, BUILD_DATA[0]]);
    console.log(totalBuilds);
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container pt-6">
        {/* header row */}
        <div className="pt-6 grid grid-cols-7 gap-6 ">
          {progressHeadlines.map((headline) => {
            return (
              <p className="text-white font-semibold" key={headline}>
                {headline}
              </p>
            );
          })}
        </div>
        {/* data rows */}
        <div className="mt-4 space-y-4">
          {BUILD_DATA.map((singleBuildData) => (
            <SingleBuild key={singleBuildData.id} data={singleBuildData} />
          ))}
          {totalBuilds.map((newBuildData) => (
            <SingleBuild key={newBuildData.id} data={newBuildData} />
          ))}
        </div>
      </div>
      <button className="mt-5" onClick={() => addBuild()}>
        Add Build Order
      </button>
    </div>
  );
}
