import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export const LadderStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/sc2/ladder/grandmaster/2", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {data ? (
          <div>
            <h1>Grandmaster Ladder</h1>
            {data.ladderTeams.map((team, index) => (
              <div key={team.teamMembers.id}>
                <p>Rank: {index + 1}</p>
                <p>MMR: {team.mmr}</p>
                <p>Player: {team.teamMembers[0].displayName}</p>
                <p>
                  Wins: {team.wins} - Losses: {team.losses}
                </p>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
