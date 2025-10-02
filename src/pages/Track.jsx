import { useState } from "react";
import Navbar from "../components/Navbar";
import SingleBuild from "../components/SingleBuild";
import { BUILD_DATA } from "../data/build_data";

export default function Track() {
  const [totalBuilds, setTotalBuilds] = useState([]);
  const [newId, setNewId] = useState(0);

  // המשתמש מקבל כפתור: הוסף שורה לטבלה
  // לחיצה על הכפתור נותנת למשתמש שורה של Input fields
  // המשתמש ממלא input fields
  // המשתמש לוחץ שמירה
  // המידע נשמר בDB המעפן שלי
  // השדות משתנים מinput למשהו קבוע יותר
  // המשתמש יכול להוסיף שורות חדשות עם הכפתור הוסף שורה לטבלה
  // בהמשך - עדכון ערכים קיימים

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
    const emptyBuild = {
      id: newId,
      buildName: "New build bane",
      benchmark: "New benchmark",
      bestTIme: "New best time",
      mapName: "new map",
      wlRatio: " new 10%",
      cheeseRating: "new cheese",
      standardRating: "new standard",
    };

    setTotalBuilds([...totalBuilds, emptyBuild]);
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container pt-6">
        {/* header row */}
        <div className="pt-6 grid grid-cols-8 gap-6 ">
          {progressHeadlines.map((headline) => {
            return (
              <p className="text-white font-semibold" key={headline}>
                {headline}
              </p>
            );
          })}
        </div>
        {/* Build order rows */}
        <div className="mt-4 space-y-4">
          {totalBuilds.map((data) => (
            <SingleBuild key={data.id} data={data} />
          ))}
        </div>
        <div className="">
          <button
            className="mt-4"
            onClick={() => {
              addBuild();
              setNewId(newId + 1);
            }}
          >
            Add build
          </button>
        </div>
      </div>
    </div>
  );
}
