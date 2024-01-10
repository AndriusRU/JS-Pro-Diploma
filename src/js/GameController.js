import themes from './themes';
import {generateTeam, getAllowedCoordinates} from './generators';
import Team from './Team';
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.playerTeam = generateTeam(new Team().playerTeam, 1, 3);
    this.opponentTeam = generateTeam(new Team().opponentTeam, 1, 3);
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes[1]);
    this.gamePlay.redrawPositions([...this.playerTeam, ...this.opponentTeam]);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
