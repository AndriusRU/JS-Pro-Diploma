import { expect } from '@jest/globals';
import { characterGenerator, generateTeam } from '../generators';
import Character from '../Character';
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Vampire from '../characters/Vampire';

/**
 * Test class "Character"
 */
test('can not create Character()', () => {
  expect(() => new Character()).toThrow();
});

test('Create class from Bowman', () => {
  const newCharacter = new Bowman(1);
  expect(newCharacter).toBeInstanceOf(Character);
});

test('Create class from Daemon', () => {
  const newCharacter = new Daemon(1);
  expect(newCharacter).toBeInstanceOf(Character);
});

test('Create class from Magician', () => {
  const newCharacter = new Magician(1);
  expect(newCharacter).toBeInstanceOf(Character);
});

test('Create class from Swordsman', () => {
  const newCharacter = new Swordsman(1);
  expect(newCharacter).toBeInstanceOf(Character);
});

test('Create class from Undead', () => {
  const newCharacter = new Undead(1);
  expect(newCharacter).toBeInstanceOf(Character);
});

test('Create class from Vampire', () => {
  const newCharacter = new Vampire(1);
  expect(newCharacter).toBeInstanceOf(Character);
});

test('Get Bowman`s properties', () => {
  const newCharacter = new Bowman(1);
  const correct = {
    level: 1,
    attack: 25,
    defence: 25,
    health: 50,
    isGoodCharacter: true,
    type: 'bowman',
  };
  expect(newCharacter).toEqual(correct);
});

test('Get Daemon`s properties', () => {
  const newCharacter = new Daemon(1);
  const correct = {
    level: 1,
    attack: 10,
    defence: 40,
    health: 50,
    isGoodCharacter: false,
    type: 'daemon',
  };
  expect(newCharacter).toEqual(correct);
});

test('Get Magician`s properties', () => {
  const newCharacter = new Magician(1);
  const correct = {
    level: 1,
    attack: 10,
    defence: 40,
    health: 50,
    isGoodCharacter: true,
    type: 'magician',
  };
  expect(newCharacter).toEqual(correct);
});

test('Get Swordsman`s properties', () => {
  const newCharacter = new Swordsman(1);
  const correct = {
    level: 1,
    attack: 40,
    defence: 10,
    health: 50,
    isGoodCharacter: true,
    type: 'swordsman',
  };
  expect(newCharacter).toEqual(correct);
});

test('Get Undead`s properties', () => {
  const newCharacter = new Undead(1);
  const correct = {
    level: 1,
    attack: 40,
    defence: 10,
    health: 50,
    isGoodCharacter: false,
    type: 'undead',
  };
  expect(newCharacter).toEqual(correct);
});

test('Get Vampire`s properties', () => {
  const newCharacter = new Vampire(1);
  const correct = {
    level: 1,
    attack: 25,
    defence: 25,
    health: 50,
    isGoodCharacter: false,
    type: 'vampire',
  };
  expect(newCharacter).toEqual(correct);
});

test('Generate infinity characters', () => {
  const allowedTypes = [Bowman, Swordsman, Magician];
  // const allowedTypes = [Daemon, Undead, Vampire];
  const generator = characterGenerator(allowedTypes, 2);
  for (let i = 1; i < 100; i += 1) {
    expect(generator.next().value).toBeDefined();
    expect(generator.next().value).toBeInstanceOf(Character);
  }
});

test('Generate Team (check maxLevel and count)', () => {
  const allowedTypes = [Bowman, Swordsman, Magician];
  // const allowedTypes = [Daemon, Undead, Vampire];
  expect(generateTeam(allowedTypes, 3, 5).length).toEqual(5);
  generateTeam(allowedTypes, 3, 5).forEach((elem) => {
    expect(elem.character.level).toBeLessThanOrEqual(3);
  });
});
