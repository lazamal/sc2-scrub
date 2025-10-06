import ReplayTabButton from "./ReplayTabButton";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const httpClient = axios.create();

export default function ReplayTab() {
  const [TabResults, setTabResults] = useState([]);
  const [tabText, setTabText] = useState("");

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
    <div className="bg-blue-800 w-200 h-150 flex justify-center items-center border-2">
      <div className="flex-1 flex justify-center items-center">{tabText}</div>
      <div className="flex flex-col items-end gap-4  pr-4">
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
        {/* <ReplayTabButton>Casting style</ReplayTabButton>
        <ReplayTabButton>Casting style</ReplayTabButton>
        <ReplayTabButton>Casting style</ReplayTabButton>
        <ReplayTabButton>Casting style</ReplayTabButton> */}
      </div>
    </div>
  );
}
