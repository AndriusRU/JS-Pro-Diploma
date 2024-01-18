import Character from '../Character';

export default class Undead extends Character {
  constructor(level) {
    super(level, 'undead');
    this.attack = 40;
    this.defence = 10;
    this.moveCell = 4;
    this.attackCell = 1;
    this.isGoodCharacter = false;
  }
}
