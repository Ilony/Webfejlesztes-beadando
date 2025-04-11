import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true  // Standalone pipe
})
export class DateFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'yyyy-MM-dd HH:mm'): string | null {
    if (!value) return null;
    return this.datePipe.transform(value, format);
  }
}
