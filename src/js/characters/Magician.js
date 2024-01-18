import Character from '../Character';

export default class Magician extends Character {
  constructor(level) {
    super(level, 'magician');
    this.attack = 10;
    this.defence = 40;
    this.moveCell = 1;
    this.attackCell = 4;
    this.isGoodCharacter = true;
  }
}
