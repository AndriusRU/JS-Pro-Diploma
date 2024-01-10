import PositionedCharacter from './PositionedCharacter';

/**
 * Функция возвращает список всех возможных точек на поле для расположения героев определенного типа
 * @returns массив всех возможных координат согласно условиям задачи
 * */
export function getAllowedCoordinates(typeTeam, boardSize = 8) {
  const allCoords = [...Array(boardSize ** 2).keys()];
  let allowedCoords;

  if (typeTeam === 'opponent') {
    allowedCoords = allCoords.filter((pos) => (pos % boardSize === 6 || pos % boardSize === 7));
  } else {
    allowedCoords = allCoords.filter((pos) => (pos % boardSize === 0 || pos % boardSize === 1));
  }
  return allowedCoords;
}

/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  while (true) {
    const rType = Math.floor(allowedTypes.length * Math.random());
    const rLevel = Math.floor(Math.random() * maxLevel) + 1;
    yield new allowedTypes[rType](rLevel);
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей.
 * Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const boardSize = 8;
  const newTeam = [];
  const playerCoords = getAllowedCoordinates('player', boardSize);
  const opponentCoords = getAllowedCoordinates('opponent', boardSize);

  for (let i = 0; i < characterCount; i += 1) {
    const newCharacter = characterGenerator(allowedTypes, maxLevel).next().value;
    let index;
    let position;
    if (newCharacter.isGoodCharacter) {
      index = Math.floor(playerCoords.length * Math.random());
      position = playerCoords[index];
      playerCoords.splice(index, 1);
    } else {
      index = Math.floor(opponentCoords.length * Math.random());
      position = opponentCoords[index];
      opponentCoords.splice(index, 1);
    }
    newTeam.push(new PositionedCharacter(newCharacter, position));
  }
  return newTeam;
}
