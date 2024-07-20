import Charcter from "../Character";

export default class Zombie extends Charcter {
  constructor(name, type = "Zombie") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
