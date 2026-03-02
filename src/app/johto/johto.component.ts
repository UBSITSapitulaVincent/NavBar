import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

interface GymLeader {
  name: string;
  age: number;
  location: string;
  pokemons: string; 
  motto: string;
  badge: string;
}

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfoComponent],
  template: `
    <h2>Johto Gym Leaders</h2>
    <p>{{ activeMotto() }}</p>
    @for (leader of leaders; track leader.name) {
      <app-leader-info 
        [name]="leader.name" 
        [age]="leader.age"
        [location]="leader.location"
        [pokemons]="leader.pokemons" 
        [badge]="leader.badge"
        [motto]="leader.motto"
        (Motto)="displayMotto($event)" />
    }
  `
})
export class JohtoComponent {
  activeMotto = signal('Select a leader to see their motto.');

  leaders: GymLeader[] = [
    { name: 'Falkner', age: 17, location: 'Violet City', pokemons: 'Pidgey (Lv. 9), Pidgeotto (Lv. 13)', badge: 'Zephyr', motto: 'The elegant master of flying Pokémon!' },
    { name: 'Bugsy', age: 15, location: 'Azalea Town', pokemons: 'Scyther (Lv. 17), Metapod (Lv. 15), Kakuna (Lv. 15)', badge: 'Hive', motto: 'The walking Bug Pokémon encyclopedia!' },
    { name: 'Whitney', age: 19, location: 'Goldenrod City', pokemons: 'Clefairy (Lv. 17), Miltank (Lv. 19)', badge: 'Plain', motto: 'The incredibly pretty girl!' },
    { name: 'Morty', age: 27, location: 'Ecruteak City', pokemons: 'Gastly (Lv. 21), Haunter (Lv. 21), Gengar (Lv. 25), Haunter (Lv. 23)', badge: 'Fog', motto: 'The mystic with the future-seeing eye!' },
    { name: 'Chuck', age: 39, location: 'Cianwood City', pokemons: 'Primeape (Lv. 29), Poliwrath (Lv. 31)', badge: 'Storm', motto: 'His roaring fists do the talking!' },
    { name: 'Jasmine', age: 21, location: 'Olivine City', pokemons: 'Magnemite (Lv. 30), Magnemite (Lv. 30), Steelix (Lv. 35)', badge: 'Mineral', motto: 'The iron-clad girl with a gentle heart!' },
    { name: 'Pryce', age: 63, location: 'Mahogany Town', pokemons: 'Seel (Lv. 30), Dewgong (Lv. 32), Piloswine (Lv. 34)', badge: 'Glacier', motto: 'The teacher of winter\'s harshness!' },
    { name: 'Clair', age: 27, location: 'Blackthorn City', pokemons: 'Dragonair (Lv. 38), Dragonair (Lv. 38), Dragonair (Lv. 38), Kingdra (Lv. 41)', badge: 'Rising', motto: 'The blessed user of dragon Pokémon!' }
  ];

  displayMotto(motto: string) {
    this.activeMotto.set(motto);
  }
}
