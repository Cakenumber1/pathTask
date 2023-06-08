import { getRoute } from "./index.js";

describe("getRoute tests", () => {
  test("test1", () => {
    expect(
      getRoute([
        { from: "NY", to: "London" },
        { from: "Portugal", to: "NY" }
      ])
    ).toMatchObject([
      { from: "Portugal", to: "NY" },
      { from: "NY", to: "London" }
    ]);
  });

  test("test2", () => {
    expect(
      getRoute([
        { from: "London", to: "Moscow" },
        { from: "NY", to: "London" },
        { from: "Portugal", to: "NY" },
        { from: "Moscow", to: "SPb" },
        { from: "SPb", to: "Kairo" }
      ])
    ).toMatchObject([
      { from: "Portugal", to: "NY" },
      { from: "NY", to: "London" },
      { from: "London", to: "Moscow" },
      { from: "Moscow", to: "SPb" },
      { from: "SPb", to: "Kairo" }
    ]);
  });
});
