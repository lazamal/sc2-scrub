import { BrowserRouter, Routes, Route, Router, Link } from "react-router";
import Navbar from "../components/Navbar";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { labelMarkClasses } from "@mui/x-charts/ChartsLabel";

import { useState } from "react";

export default function MyBest() {
  const [radarClick, setRadarClick] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center">
        <h1 className="">My Stats</h1>
        <h2 className="text-3xl mb-10 pt-5">Choose a skill to improve</h2>
        <RadarChart
          width={600}
          height={500}
          onAxisClick={(event, params) => setRadarClick(params.axisValue)}
          series={[
            {
              label: "Player",
              data: [120, 98, 86, 99, 85, 65],
              fillArea: true,
            },
          ]}
          radar={{
            max: 120,
            metrics: [
              "Agression",
              "Build Strategy",
              "Micro-ability",
              "Consistenty",
              "Improvisation",
              "Efficiency",
            ],
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
      <div className="mt-5 text-3xl">{radarClick ? radarClick : ""}</div>
    </>
  );
}
