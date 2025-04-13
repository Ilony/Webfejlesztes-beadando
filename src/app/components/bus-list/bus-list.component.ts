import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-bus-list',
  standalone: true,
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
  imports: [CommonModule]  
})
export class BusListComponent {
  @Input() buses: Array<{ id: number; busNumber: string; origin: string; destination: string; departureTime: string }> = [];

  constructor() {}
}
