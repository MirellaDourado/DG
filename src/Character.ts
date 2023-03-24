import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  _race: Race;
  _archetype: Archetype;
  _maxLifePoinst: number;
  _lifePoints: number;
  _strength: number;
  _defense: number;
  _dexterity: number;
  _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoinst = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoinst;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(injure: number): number {
    const dmg = injure - this._defense;
    if (dmg > 0) { this._lifePoints -= dmg; } else { this._lifePoints -= 1; }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
  
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoinst += getRandomInt(1, 10);
    if (this._maxLifePoinst > this._race.maxLifePoints) {
      this._maxLifePoinst = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoinst;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoinst(): number {
    return this._maxLifePoinst;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}