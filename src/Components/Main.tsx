import { useState } from 'react';
import { PlayerCreature } from '../Classes/PlayerCreature';
import { EnemyCreature } from '../Classes/EnemyCreature';

const type = 'Pebble';

const health = 100;
const experience = 0;
const name = 'Dave';
const attacks = [
  { name: 'Pebble Strike', cooldown: 1, value: 5, type: 'attack' },
  { name: 'Pebble Heal', cooldown: 3, value: 10, type: 'heal' },
];

const player = new PlayerCreature(experience, type, health, name, attacks);

const enemy = new EnemyCreature(50, 'Soldier Ant', [
  { name: 'Bite', cooldown: 1, type: 'attack', value: 10 },
]);

export default function Main(): JSX.Element {
  const [playerHealth, setPlayerHealth]: [
    number,
    (arg: number) => void
  ] = useState(player.health);

  const [enemyHealth, setEnemyHealth]: [
    number,
    (arg: number) => void
  ] = useState(enemy.health);

  const simulateBattle = (): void => {
    if (player && enemy) {
      console.log('attacking');
      player.receiveAttack(enemy.move('Bite') as number);
      setPlayerHealth(player.health);
      enemy.receiveAttack(player.move('Pebble Strike') as number);
      setEnemyHealth(enemy.health);
    }
  };

  return (
    <>
      <h2>Main</h2>
      <button onClick={(): void => simulateBattle()}>Simulate Battle</button>
      <div>Enemy Health: {enemyHealth}</div>
      <div>Your Health: {playerHealth}</div>
    </>
  );
}
