import React from 'react';
import { PlayerCreature } from '../Classes/PlayerCreature';

export default function Main(): JSX.Element {
  const health = 100;
  const experience = 0;
  const name = 'Dave';
  const attacks = [
    { name: 'Pebble Strike', cooldown: 1, value: 5, type: 'attack' },
    { name: 'Pebble Heal', cooldown: 3, value: 10, type: 'heal' },
  ];
  const type = 'Pebble';

  let player = new PlayerCreature(experience, type, health, name, attacks);

  console.log(player.move('Pebble Strike'));
  player.receiveAttack(20);
  player.move('Pebble Heal');
  console.log(player.health);
  player.receiveAttack(50);
  console.log(player.health);
  player.receiveAttack(30);

  return <h2>Main</h2>;
}
