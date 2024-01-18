/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  const boardFullSize = boardSize ** 2;
  const normIndex = index + 1;
  let result = '';
  // если номера верхние, то top
  if (normIndex <= boardSize) {
    result += 'top-';
  }
  // если номера нижние, то bottom
  if (normIndex > boardFullSize - boardSize) {
    result += 'bottom-';
  }
  // если номера левые в столбце, то left
  // если номера правые в столбце, то right
  // в противном случае удаляем дефис из переменной
  if (Number.isInteger((normIndex - 1) / boardSize)) {
    result += 'left';
  } else if (Number.isInteger(normIndex / boardSize)) {
    result += 'right';
  } else {
    result = result.slice(0, -1);
  }

  if (result !== '') {
    return result;
  }

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

/**
 * Функция вычисления расстояния между двумя позициями по горизонтали (X) и по вертикали (Y)
 * @firstPosition - индекс поля выделенного игрока
 * @secondPosition - индекс поля, которое выделил игрок
 */
function distanceXY(firstPosition, secondPosition, boardSize) {
  const initialCoords = Array(boardSize ** 2);
  initialCoords.fill(0);
  const coords = initialCoords.map((e, i) => ({ x: i % boardSize, y: Math.floor(i / boardSize) }));
  const currentCoords = coords[firstPosition];
  const nextCoords = coords[secondPosition];
  const diffX = Math.abs(currentCoords.x - nextCoords.x);
  const diffY = Math.abs(currentCoords.y - nextCoords.y);
  return {
    diffX,
    diffY,
  };
}

/**
 * Функция проверки возможности двигаться персонажу в указанную клетку относительно его положения
 * @curPosition - индекс поля текущей позиции персонажа
 * @nextPosition - индекс поля позиции, куда планируется переместить персонажа
 * @moveCell - на сколько клеток может двигаться персонаж
 */

export function possibleMove(curPosition, nextPosition, moveCell, boardSize = 8) {
  const diffCoords = distanceXY(curPosition, nextPosition, boardSize);
  if (diffCoords.diffX <= moveCell && diffCoords.diffY <= moveCell) {
    if (diffCoords.diffY === 0 || diffCoords.diffX === 0
      || diffCoords.diffX === diffCoords.diffY) {
      // перемещение по горизонтали - diffCoords.diffY === 0
      // перемещение по вертикали - diffCoords.diffX === 0
      // перемещение по диагоналям - diffCoords.diffX === diffCoords.diffY
      return true;
    }
  }
  return false;
}

/**
 * Функция проверки возможности атаковать персонажа в указанной клетке относительно его положения
 * @curPosition - индекс поля текущей позиции персонажа
 * @nextPosition - индекс поля позиции, где планируется произвести атаку персонажа
 * @attackCell - на сколько клеток может атаковать персонаж
 */
export function possibleAttack(curPosition, nextPosition, attackCell, boardSize = 8) {
  const diffCoords = distanceXY(curPosition, nextPosition, boardSize);
  return diffCoords.diffX <= attackCell && diffCoords.diffY <= attackCell;
}
