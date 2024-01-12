import { expect, test } from '@jest/globals';
import parse from 'html-dom-parser';
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import GameStateService from '../GameStateService';
import Bowman from '../characters/Bowman';
import Undead from '../characters/Undead';
import PositionedCharacter from '../PositionedCharacter';

let gPlay = null;
let gStateService = null;
let gController = null;

test('Show ToolTip for character in cell', () => {
  /*
  const stringContainer = '<div id=game-container></div>';
  const html = parse(stringContainer);
  // const container = html.body;
  const container = html;
  gPlay = new GamePlay();
  gPlay.bindToDOM(container);
  gStateService = new GameStateService(Storage.prototype);
  gController = new GameController(gPlay, gStateService);
  gController.init();
  const elem = jest.fn();
  gController.onCellEnter(0);
  expect(elem).toHaveBeenCalled();
  */
});
