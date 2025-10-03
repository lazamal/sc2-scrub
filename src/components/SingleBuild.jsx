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
  // question for chen, should i save data array as a state?
  const dataArray = [
    buildName,
    benchmark,
    bestTIme,
    mapName,
    wlRatio,
    cheeseRating,
    standardRating,
  ];

  const [saveInput, setSaveInput] = useState(dataArray);
  // lesson 81 on udemy course - update state immutably
  function handleinputs(newValue, index) {
    setSaveInput((prev) => {
      const updatedBuildData = [...prev];

      updatedBuildData[index] = newValue;

      return updatedBuildData;
    });
  }
  // lesson 82 on udemy course - lifting state up
  function saveBuild() {
    console.log(saveInput);
  }

  return (
    <div className="grid grid-cols-8 border-b border-gray-700 pb-2 col-span-8 gap-6">
      {dataArray.map((value, index) => {
        return (
          <input
            type="text"
            key={`${id}+${value}`}
            placeholder={value}
            className=""
            onChange={(event) => {
              const newValue = event.target.value;
              handleinputs(newValue, index);
            }}
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
