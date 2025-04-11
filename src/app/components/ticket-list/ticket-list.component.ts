import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importáljuk a CommonModule-t

interface Ticket {
  busNumber: string;
  departureTime: string;
  seatNumber: string;
  passengerName: string;
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  standalone: true, // Standalone komponensként
  imports: [CommonModule]  // Importáljuk a CommonModule-t, hogy a pipe-ok működjenek
})
export class TicketListComponent {
  @Input() tickets: Ticket[] = [
    {
      busNumber: 'B123',
      departureTime: '2025-04-10T08:00:00',
      seatNumber: '1A',
      passengerName: 'Kovács Péter'
    },
    {
      busNumber: 'B124',
      departureTime: '2025-04-10T09:00:00',
      seatNumber: '2B',
      passengerName: 'Szabó Anna'
    },
    {
      busNumber: 'B125',
      departureTime: '2025-04-10T10:00:00',
      seatNumber: '3C',
      passengerName: 'Nagy Tamás'
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.tickets); // Ellenőrizd a ticket adatokat a konzolon
  }
}
