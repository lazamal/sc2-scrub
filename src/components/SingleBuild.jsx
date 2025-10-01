import { useState } from "react";

export default function SingleBuild({ data }) {
  const {
    id,
    buildName,
    benchmark,
    bestTIme,
    mapName,
    wlRatio,
    cheeseRating,
    standardRating,
  } = data;

  const dataArray = [
    buildName,
    benchmark,
    bestTIme,
    mapName,
    wlRatio,
    cheeseRating,
    standardRating,
  ];

  const [inputToUpdate, setInputToUpdate] = useState({});

  function saveBuild() {
    // need to figure out how can i recieve data from the input element inside the component
    // watch lesson 81 in the udemy course! he is doing exacly that
    console.log(`Save the input fields of ${id}`);
    setInputToUpdate();
  }

  return (
    <div className="grid grid-cols-8 border-b border-gray-700 pb-2 col-span-8 gap-6">
      {dataArray.map((value) => {
        return (
          <input
            type="text"
            key={`${id}+${value}`}
            placeholder={value}
            className=""
          />
        );
      })}
      <button
        onClick={() => {
          saveBuild();
        }}
      >
        Save
      </button>
    </div>
  );
}
