import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: unknown, args?: number): unknown {
    //The value is of type unknown, so you need to assert or check its type before calling substring on it.
    //"unknown" is a safer alternative to "any"."any" lets you do anything → but you lose type safety."unknown" says: “You can store anything in me, but before you use me—you must check or assert my type.”
    if (typeof value === 'string') {
      //return value.substring(0, 140) + '...';
      //Instead of the above line, we can use string literals.
      //return `${value.substring(0, 140)}...`;
      return `${value.substring(0, args)}...`;
    }
    return '';
  }

}
