import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterate'
})
export class IteratePipe implements PipeTransform {

  transform(value: number): any {
    if (!value) 
      return null;
    
    return (new Array(value).fill(1));
  }

}
