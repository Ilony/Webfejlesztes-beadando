import { Component } from '@angular/core';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,   
    BusListComponent,
    BusDetailComponent,
    BookingFormComponent,
    TicketListComponent
  ]
})
export class AppComponent {
  title = 'Buszjegy Lefoglaló';
  activeComponent: string = 'busList'; 

  selectedBus = {
    busNumber: '123',
    origin: 'Budapest',
    destination: 'Debrecen',
    departureTime: '2025-04-10T10:00:00',
    availableSeats: 30
  };

  buses = [
    { id: 1, busNumber: '123', origin: 'Budapest', destination: 'Debrecen', departureTime: '2025-04-10T10:00:00' },
    { id: 2, busNumber: '456', origin: 'Szeged', destination: 'Pécs', departureTime: '2025-04-11T14:30:00' },
    {"id": 3,
    "busNumber": "455",
    "origin": "Sopron",
    "destination": "Győr",
    "departureTime": "2025-05-04T07:53:43"},
    {   "id": 4,
      "busNumber": "172",
      "origin": "Debrecen",
      "destination": "Nyíregyháza",
      "departureTime": "2025-05-05T21:31:43"},
      {  "id": 5,
        "busNumber": "544",
        "origin": "Pécs",
        "destination": "Veszprém",
        "departureTime": "2025-04-25T17:33:43"},
        {"id": 6,
         "busNumber": "352",
        "origin": "Nyíregyháza",
        "destination": "Szeged",
        "departureTime": "2025-04-17T13:55:43"}, 
          {
          "id": 8,
          "busNumber": "441",
          "origin": "Nyíregyháza",
          "destination": "Miskolc",
          "departureTime": "2025-04-19T14:15:43"
        },{
          "id": 9,
          "busNumber": "901",
          "origin": "Sopron",
          "destination": "Veszprém",
          "departureTime": "2025-04-14T07:00:43"
        },{
          "id": 10,
          "busNumber": "810",
          "origin": "Miskolc",
          "destination": "Debrecen",
          "departureTime": "2025-04-17T03:09:43"
        }
  ];

  tickets = [
    { busNumber: '123', departureTime: '2025-04-10T10:00:00', seatNumber: 'A1', passengerName: 'János Varga' },
    { busNumber: '456', departureTime: '2025-04-11T14:30:00', seatNumber: 'B3', passengerName: 'Katalin Kovács' },
    {
      "busNumber": "455",
      "departureTime": "2025-05-04T07:53:43",
      "seatNumber": "B2",
      "passengerName": "Anna Kovács"
    },
    {
      "busNumber": "455",
      "departureTime": "2025-05-04T07:53:43",
      "seatNumber": "C5",
      "passengerName": "László Farkas"
    },
    {
      "busNumber": "455",
      "departureTime": "2025-05-04T07:53:43",
      "seatNumber": "D7",
      "passengerName": "Katalin Szabó"
    },
    {
      "busNumber": "123",
      "departureTime": "2025-04-10T10:00:00",
      "seatNumber": "A10",
      "passengerName": "Zoltán Molnár"
    },
    {
      "busNumber": "123",
      "departureTime": "2025-04-10T10:00:00",
      "seatNumber": "E1",
      "passengerName": "Mária Tóth"
    },
    {
      "busNumber": "352",
      "departureTime": "2025-04-17T13:55:43",
      "seatNumber": "F3",
      "passengerName": "István Kiss"
    },
    {
      "busNumber": "123",
      "departureTime": "2025-04-10T10:00:00",
      "seatNumber": "B6",
      "passengerName": "János Varga"
    },
    {
      "busNumber": "441",
      "departureTime": "2025-04-19T14:15:43",
      "seatNumber": "C9",
      "passengerName": "László Németh"
    },
    {
      "busNumber": "901",
      "departureTime": "2025-04-14T07:00:43",
      "seatNumber": "A2",
      "passengerName": "Gábor Horváth"
    },
    {
      "busNumber": "810",
      "departureTime": "2025-04-17T03:09:43",
      "seatNumber": "D4",
      "passengerName": "Éva Varga"
    }
  ];
}
