import { Routes } from '@angular/router';
import { KantoComponent } from './Kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';
import { HoennComponent } from './hoenn/hoenn.component';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
];


