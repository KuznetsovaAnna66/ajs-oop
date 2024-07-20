import Charcter from "../Character";

export default class Bowman extends Charcter {
  constructor(name, type = "Bowman") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
