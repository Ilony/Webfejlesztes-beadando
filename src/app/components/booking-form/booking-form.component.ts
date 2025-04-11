import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  @Input() bus: any; // Itt fogadjuk az adatokat

  constructor() { }

  // Egyéb logika...
}
