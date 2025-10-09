import Navbar from "../components/Navbar";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { labelMarkClasses } from "@mui/x-charts/ChartsLabel";
import axios from "axios";
import { useEffect } from "react";

import { useState } from "react";

export default function MyStats() {
  const [radarClick, setRadarClick] = useState("");
  const [goalValues, setGoalValues] = useState([120, 98, 86, 99, 85, 65]);
  const [currentValues, setCurrentValues] = useState([10, 20, 30, 40, 50, 60]);
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

  function HandleGoalForm() {
    console.log("form changed");
  }

  return (
    <>
      <Navbar />
      {console.log(currentValues)}
      <div className="flex flex-col justify-center">
        <h1 className="">My Stats</h1>
        <h2 className="text-3xl mb-10 pt-5">Choose a skill to improve</h2>
        <div className="flex flex-row items-center gap-70">
          <form
            className="flex flex-col"
            action=""
            onChange={() => HandleGoalForm()}
          >
            {currentValues.map((index) => {
              return (
                <>
                  <label>{metrics[index]}</label>
                  <input key={index} label="name" type="range" />;
                </>
              );
            })}
          </form>

          <RadarChart
            width={500}
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
