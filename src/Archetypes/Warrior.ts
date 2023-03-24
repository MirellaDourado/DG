import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  static _warriorrInstace = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._warriorrInstace += 1;
  }

  public static createdArchetypeInstances() : number {
    return Warrior._warriorrInstace;
  }
  
  public get energyType(): EnergyType {
    return this._energy;
  }
}