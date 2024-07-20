import Charcter from "../Character";

export default class Magician extends Charcter {
  constructor(name, type = "Magician") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
