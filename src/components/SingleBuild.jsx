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

  const [editedValue, setEditedValue] = useState(dataArray);

  return (
    <>
      {dataArray.map((value) => {
        return <input type="text" key={`${id}-${value}`} placeholder={value} />;
      })}

      {/* <input type="text" placeholder={buildName} />
      <input type="text" placeholder={benchmark} />
      <input type="text" placeholder={bestTIme} />
      <input type="text" placeholder={mapName} />
      <input type="text" placeholder={wlRatio} />
      <input type="text" placeholder={cheeseRating} />
      <input type="text" placeholder={standardRating} /> */}
    </>
  );
}
