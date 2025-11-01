import { httpClient } from "../services/httpReq.js";

export const fetchPlayerData = (fileName) => {
  return httpClient.get(fileName).then((result) => {
    const player_currentData = result.data[0];
    return Object.values(player_currentData);
  });
};
