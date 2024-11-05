import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if(!value)return value;
    else {
      return value.toLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase()+ word.slice(1)).join(' ')
    }
  }

}
