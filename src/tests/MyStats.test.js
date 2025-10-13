import { expect, test } from "vitest";
import { MyStats } from "../pages/MyStats.jsx";

test("sending http request for data expecting a variable with the data", () => {
  expect(MyStats.fetchPlayerData()).toBe(1);
});
