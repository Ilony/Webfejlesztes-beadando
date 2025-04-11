import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';  // Importáljuk a CommonModule-t

@Component({
  selector: 'app-bus-detail',
  standalone: true,
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css'],
  providers: [DatePipe],
  imports: [CommonModule]  // Add hozzá a CommonModule-t
})
export class BusDetailComponent {
  @Input() bus!: { 
    busNumber: string;
    origin: string;
    destination: string;
    departureTime: string;
    availableSeats: number;
  };

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    console.log(this.bus); // Ellenőrizd a bus adatokat a konzolon
  }

  transformDate(date: string | null): string {
    if (date) {
      return this.datePipe.transform(date, 'short') || ''; 
    }
    return ''; 
  }
}
