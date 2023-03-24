import Energy from '../Energy';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  attack(e: Fighter | SimpleFighter): void,
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp():void;
}

export interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(fighter: SimpleFighter):void;
  receiveDamage(attackPoints: number): number
}