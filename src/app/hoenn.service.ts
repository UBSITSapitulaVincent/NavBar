import { Injectable, signal } from '@angular/core';

export interface GymLeader {
  name: string;
  town: string;
  specialty: string;
  badge: string;
  team: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HoennGymLeadersService {
  // Private Signal for data
  private hoennLeaders = signal<GymLeader[]>([
    {
      name: 'Roxanne',
      town: 'Rustboro City',
      specialty: 'Rock',
      badge: 'Stone Badge',
      team: ['Nosepass', 'Dusclops', 'Lunatone', 'Relicanth']
    },
    {
      name: 'Brawly',
      town: 'Dewford Town',
      specialty: 'Fighting',
      badge: 'Knuckle Badge',
      team: ['Makuhita', 'Meditite', 'Hariyama', 'Mightyena']
    },
    {
      name: 'Norman',
      town: 'Pacifidlog Town',
      specialty: 'Normal',
      badge: 'Balance Badge',
      team: ['Slaking', 'Slakoth', 'Vigoroth', 'Slaking']
    },
    {
      name: 'Winona',
      town: 'Slateport City',
      specialty: 'Flying',
      badge: 'Mind Badge',
      team: ['Altaria', 'Swablu', 'Skarmory', 'Tropius']
    },
    {
      name: 'Tate & Liza',
      town: 'Lilycove City',
      specialty: 'Psychic',
      badge: 'Rain Badge',
      team: ['Lunatone', 'Solrock', 'Baltoy', 'Claydol']
    },
    {
      name: 'Juan',
      town: 'Mossdeep City',
      specialty: 'Water',
      badge: 'Depth Badge',
      team: ['Luvdisc', 'Seaking', 'Sharpedo', 'Milotic']
    },
    {
      name: 'Wallace',
      town: 'Pacifidlog Town',
      specialty: 'Water',
      badge: 'Wave Badge',
      team: ['Luvdisc', 'Seaking', 'Sharpedo', 'Milotic']
    },
    {
      name: 'Steven',
      town: 'Slateport City',
      specialty: 'Steel',
      badge: 'Ribbon Badge',
      team: ['Metagross', 'Lairon', 'Aron', 'Aggron']
    }
  ]);

  getLeaders() {
    return this.hoennLeaders();
  }
}