export default class Charcter {
  constructor(name, type) {
    if (
      !name ||
      typeof name !== "string" ||
      name.length < 2 ||
      name.length > 10
    ) {
      throw new Error("Invalid name");
    }

    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!types.some((item) => item === type)) {
      throw new Error("Invalid type");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("The character is dead");
    }
    this.level += 1;
    this.attack = this.attack + this.attack * 0.2;
    this.defence = this.defence + this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    this.health = this.health - points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    } else {
      Math.round(this.health);
    }
  }
}
