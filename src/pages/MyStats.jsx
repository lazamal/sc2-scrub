import Navbar from "../components/Navbar";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { labelMarkClasses } from "@mui/x-charts/ChartsLabel";
import axios from "axios";
import { useEffect } from "react";

import { useState } from "react";

export default function MyStats() {
  const [radarClick, setRadarClick] = useState("");
  const [goalValues, setGoalValues] = useState([20, 20, 10, 10, 10, 10]);
  const [currentValues, setCurrentValues] = useState([]);
  const metrics = [
    "Agression",
    "Build Strategy",
    "Micro-ability",
    "Consistenty",
    "Improvisation",
    "Efficiency",
  ];

  const httpClient = axios.create();

  const fetchPlayerData = () => {
    httpClient.get(`/player_current.json`).then((result) => {
      const player_currentData = result.data[0];
      setCurrentValues(Object.values(player_currentData));
    });
  };

  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center">
        <h1 className="">My Stats</h1>
        <h2 className="text-3xl mb-10 pt-5">Choose a skill to improve</h2>
        <div className="flex flex-row items-center gap-70">
          <form
            className="flex flex-col bg-cyan-800 rounded-3xl p-10"
            action=""
          >
            <h2 className="text-3xl pb-10"> Goal Form</h2>
            {goalValues.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-around gap-10 pb-5"
                >
                  <label className="mr-4">{metrics[index]}</label>
                  <input
                    id={metrics[index]}
                    min="0"
                    max="120"
                    type="range"
                    value={value}
                    onChange={(event) => {
                      const newValues = [...goalValues];
                      newValues[index] = Number(event.target.value);
                      setGoalValues(newValues);
                    }}
                  />
                </div>
              );
            })}
          </form>

          <RadarChart
            width={600}
            height={500}
            onAxisClick={(event, params) => setRadarClick(params.axisValue)}
            series={[
              {
                label: "Current",
                data: currentValues,
                fillArea: true,
              },
              {
                label: "Goal",
                data: goalValues,
                fillArea: true,
              },
            ]}
            radar={{
              max: 120,
              metrics: metrics,
            }}
            sx={{
              "& text": {
                fontSize: "15px !important",
                fill: "white",
              },
            }}
            slotProps={{
              legend: {
                sx: {
                  fontSize: 20,
                  color: "White",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="mt-5 text-3xl">{radarClick ? radarClick : ""}</div>
    </>
  );
}
