import Swordsman from "../js/characters/AllCharacters/Swordsman";

test("testing of Swordsman creation without type parameter", () => {
  const result = new Swordsman("player");
  expect(result).toEqual({
    name: "player",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
