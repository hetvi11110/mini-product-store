import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exactWordLimit'
})
export class ExactWordLimitPipe implements PipeTransform {

  transform(value: string, limit: number = 180): string {
    if (!value) return '';

    if (value.length <= limit) return value;

    const words = value.split(' ');
    let truncated = '';

    for (let word of words) {
      if ((truncated + ' ' + word).trim().length > limit) break;
      truncated += (truncated ? ' ' : '') + word;
    }

    return truncated + '...';
  }

}
