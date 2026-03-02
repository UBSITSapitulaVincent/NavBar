import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent }
];
