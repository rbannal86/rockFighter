import { Creature, AttackObj } from './Creature';

export class PlayerCreature extends Creature {
  constructor(
    public experience: number,
    type: string,
    public health: number,
    public name: string,
    public attacks: AttackObj[]
  ) {
    super(health, name, attacks);
  }

  //has health
  //has experience (unique)
  //has attacks with stats - attacks have cooldowns
  //has name
  //has type/species
  //experience value (for enemies)
  //execute move
  //take damage
  //handleDeath
  //level up (unique) (gainExperience)
  //become new type (unique)

  gainExperience(amount: number): void {
    this.experience = this.experience + amount;
  }
}
