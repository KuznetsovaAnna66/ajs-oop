import Charcter from "../Character";

export default class Undead extends Charcter {
  constructor(name, type = "Undead") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
