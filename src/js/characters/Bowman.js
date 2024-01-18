import Character from '../Character';

export default class Bowman extends Character {
  constructor(level) {
    super(level, 'bowman');
    this.attack = 25;
    this.defence = 25;
    this.moveCell = 2;
    this.attackCell = 2;
    this.isGoodCharacter = true;
  }
}
