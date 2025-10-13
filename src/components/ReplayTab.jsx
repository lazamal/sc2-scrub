import ReplayTabButton from "./ReplayTabButton";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import { replayTabStyle } from "../styles";

const httpClient = axios.create();

export default function ReplayTab() {
  const [TabResults, setTabResults] = useState([]);
  const [tabText, setTabText] = useState(
    "A variaty of different casting styles for your choice, click below."
  );

  const fetchTabData = () => {
    httpClient.get(`/casting_style_data.json`).then((result) => {
      setTabResults(result.data);
    });
  };

  useEffect(() => {
    fetchTabData();
  }, []);

  function handleClick(index) {
    setTabText(TabResults[index].text);
  }

  return (
    <div className={replayTabStyle}>
      <h2 className="text-3xl">
        Choose what style you would like to have your replay cast
      </h2>
      <div className="flex-1 flex justify-center items-center text-2xl">
        {tabText}
      </div>
      <div className="flex flex-row items-end gap-4  pr-4">
        {TabResults.map(({ styleName }, index) => {
          return (
            <ReplayTabButton
              onSelect={() => handleClick(index)}
              key={styleName}
            >
              {styleName}
            </ReplayTabButton>
          );
        })}
      </div>
    </div>
  );
}
