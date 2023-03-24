import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  static _rangerInstace = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger._rangerInstace += 1;
  }

  public static createdArchetypeInstances() : number {
    return Ranger._rangerInstace;
  }
  
  public get energyType(): EnergyType {
    return this._energy;
  }
}