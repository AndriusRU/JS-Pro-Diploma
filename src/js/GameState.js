export default class GameState {
  constructor(playerTeam, opponentTeam) {
    this.playerTeam = playerTeam;
    this.opponentTeam = opponentTeam;
    this.playerMove = true;
  }

  static from(object) {
    // TODO: create object
    return null;
  }
}
