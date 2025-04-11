export interface Booking {
    id: number;
    busId: number;
    passengerName: string;
    passengerEmail: string;
    seatsBooked: number;
    status: 'confirmed' | 'pending';
  }
  