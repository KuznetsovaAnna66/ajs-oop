import Bowman from "../js/characters/AllCharacters/Bowman";

test("testing of Bowman creation without type parameter", () => {
  const result = new Bowman("player");
  expect(result).toEqual({
    name: "player",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
