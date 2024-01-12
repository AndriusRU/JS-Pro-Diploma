import themes from './themes';
import { generateTeam, getAllowedCoordinates } from './generators';
import Team from './Team';
import GameState from './GameState';
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.playerTeam = generateTeam(new Team().playerTeam, 1, 3);
    this.opponentTeam = generateTeam(new Team().opponentTeam, 1, 3);
    this.gameState = new GameState(this.playerTeam, this.opponentTeam);
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes[1]);
    this.gamePlay.redrawPositions([...this.playerTeam, ...this.opponentTeam]);
    this.enterOnCell();
    this.leaveOnCell();
    this.clickOnCell();
  }

  onCellClick(index) {
    // TODO: react to click
    // Clear 'selected-yellow' when click on myself
    if (this.gameState.selectedCharacter && this.gameState.selectedCharacter.position === index) {
      this.gamePlay.deselectCell(index);
      this.gameState.selectedCharacter = null;
    } else {
      // Clear 'selected-yellow' when click on another field with Character of Player
      const isCharacter = this.hasCharacter(index);
      const person = this.getCharacter(index);
      if (isCharacter) {
        if (person.character.isGoodCharacter) {
          this.gameState.selectedCharacter = person;
          this.gamePlay.cells.forEach((element) => {
            element.classList.remove(...Array.from(element.classList)
              .filter((item) => item.startsWith('selected')));
          });
          this.gamePlay.selectCell(index);
        } else {
          GamePlay.showMessage('Это игрок из чужой команды !!!');
        }
      } else {
        GamePlay.showMessage('Это пустая клетка !!!');
      }
    }
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const isCharacter = this.hasCharacter(index);
    const person = this.getCharacter(index);
    if (isCharacter) {
      const message = `\u{1F396}${person.character.level} \u{1F5E1}${person.character.attack} \u{1F6E1}${person.character.defence} \u{1F493}${person.character.health}`;
      this.gamePlay.showCellTooltip(message, index);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
  }

  hasCharacter(index) {
    const allCharacters = [...this.playerTeam, ...this.opponentTeam];
    return allCharacters.some((person) => person.position === index);
  }

  getCharacter(index) {
    let result = this.playerTeam.find((person) => person.position === index);
    if (!result) {
      result = this.opponentTeam.find((person) => person.position === index);
    }
    return result;
  }

  enterOnCell() {
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
  }

  leaveOnCell() {
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
  }

  clickOnCell() {
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }
}
