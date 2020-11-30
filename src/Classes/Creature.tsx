export interface AttackObj {
  name: string;
  cooldown: number;
  value: number;
  type: string;
}

export abstract class Creature {
  constructor(
    public health: number,
    public name: string,
    public attacks: AttackObj[]
  ) {}

  receiveAttack(damage: number): void {
    this.health = this.health - damage;
    if (this.health <= 0) this.handleDeath();
  }

  handleDeath(): void {
    console.log('You Died!');
  }

  move(move: string): number | void {
    let moveDetails = this.attacks[
      this.attacks.findIndex((p) => p.name === move)
    ];
    if (moveDetails.type === 'attack')
      return Math.ceil(Math.random() * moveDetails.value);
    else if (moveDetails.type === 'heal')
      this.health = this.health + Math.ceil(Math.random() * moveDetails.value);
  }
}
