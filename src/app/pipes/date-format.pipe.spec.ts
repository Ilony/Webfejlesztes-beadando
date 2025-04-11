import { DateFormatPipe } from './date-format.pipe';
import { DatePipe } from '@angular/common';  // Ne felejtsd el importálni a DatePipe-ot

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;
  let datePipe: DatePipe;

  beforeEach(() => {
    datePipe = new DatePipe('en-US'); // Példányosítjuk a DatePipe-ot
    pipe = new DateFormatPipe(datePipe);  // Átadjuk a DatePipe-ot a DateFormatPipe konstruktorának
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // További tesztek hozzáadása szükséges
});
