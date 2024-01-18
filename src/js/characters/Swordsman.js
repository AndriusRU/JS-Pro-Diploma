import Character from '../Character';

export default class Swordsman extends Character {
  constructor(level) {
    super(level, 'swordsman');
    this.attack = 40;
    this.defence = 10;
    this.moveCell = 4;
    this.attackCell = 1;
    this.isGoodCharacter = true;
  }
}
