import Charcter from "../Character";

export default class Swordsman extends Charcter {
  constructor(name, type = "Swordsman") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
