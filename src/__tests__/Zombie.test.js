import Zombie from "../js/characters/AllCharacters/Zombie";

test("testing of Zombie creation without type parameter", () => {
  const result = new Zombie("player");
  expect(result).toEqual({
    name: "player",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
