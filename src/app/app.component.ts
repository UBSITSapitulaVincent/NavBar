import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; 
import { HomeComponent } from './home/home.component';     
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gym-Leaders';
}
