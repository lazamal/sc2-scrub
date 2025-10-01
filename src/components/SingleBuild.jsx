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

  return (
    <div className="grid grid-cols-7 border-b border-gray-700 pb-2 col-span-8 gap-6">
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
    </div>
  );
}
