import Daemon from "../js/characters/AllCharacters/Daemon";

test("testing of Daemon creation without type parameter", () => {
  const result = new Daemon("player");
  expect(result).toEqual({
    name: "player",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
