import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoennGymLeadersService, GymLeader } from '../hoenn.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hoenn.component.html',
  styleUrls: ['./hoenn.component.css']
})
export class HoennComponent {
  private hoennService = inject(HoennGymLeadersService);
  
  leaders = this.hoennService.getLeaders();
}