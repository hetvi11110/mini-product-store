import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentYear'
})
export class CurrentYearPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return new Date().getFullYear();
  }

}
