import Character from "../js/characters/Character";

test("testing character class creation with no name", () => {
  expect(() => new Character()).toThrow("Invalid name");
});

test("testing character class creation with a name that is not a string", () => {
  expect(() => new Character(25)).toThrow("Invalid name");
});

test("testing character class creation with too short name", () => {
  expect(() => new Character("я")).toThrow("Invalid name");
});

test("testing character class creation with too long name", () => {
  expect(() => new Character("best_player_ever")).toThrow("Invalid name");
});

test("testing character class creation with invalid type", () => {
  expect(() => new Character("Daemon", "Vampire")).toThrow("Invalid type");
});

test("testing levelUp method when health > 0", () => {
  const character = new Character("player", "Zombie");
  character.health = 20;
  character.attack = 40;
  character.defence = 10;
  character.levelUp();

  expect(character).toEqual({
    name: "player",
    type: "Zombie",
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test("testing levelUp method when health = 0", () => {
  const character = new Character("player", "Zombie");
  character.health = 0;

  expect(() => character.levelUp()).toThrow("The character is dead");
});

test("testing damage(points) method", () => {
  const character = new Character("player", "Zombie");
  character.attack = 40;
  character.defence = 10;
  character.damage(20);

  expect(character).toEqual({
    name: "player",
    type: "Zombie",
    health: 82,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("testing damage(points) method health < 0", () => {
  const character = new Character("player", "Zombie");
  character.health = 1;
  character.attack = 40;
  character.defence = 10;
  character.damage(20);

  expect(character).toEqual({
    name: "player",
    type: "Zombie",
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
