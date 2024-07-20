import Magician from "../js/characters/AllCharacters/Magician";

test("testing of Magician creation without type parameter", () => {
  const result = new Magician("player");
  expect(result).toEqual({
    name: "player",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
