import { DateFormatPipe } from './date-format.pipe';
import { DatePipe } from '@angular/common';  

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;
  let datePipe: DatePipe;

  beforeEach(() => {
    datePipe = new DatePipe('en-US'); 
    pipe = new DateFormatPipe(datePipe);  
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


});
