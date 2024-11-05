import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string): string {
    if(!value)return value;
    else{
      if(value.length>15){
        return value.slice(0,15) + '....'
      }else return value
    }
  }

}
