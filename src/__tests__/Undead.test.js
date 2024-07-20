import Undead from "../js/characters/AllCharacters/Undead";

test("testing of Undead creation without type parameter", () => {
  const result = new Undead("player");
  expect(result).toEqual({
    name: "player",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
