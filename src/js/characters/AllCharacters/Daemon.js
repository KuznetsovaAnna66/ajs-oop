import Charcter from "../Character";

export default class Daemon extends Charcter {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
