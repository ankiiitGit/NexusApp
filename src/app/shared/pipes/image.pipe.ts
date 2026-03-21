import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true
//   pure: false // This pipe is impure, meaning it will be re-evaluated on every change detection cycle.
//   // If you want to make it pure, you can remove the pure property or set it to true.
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args: any): any {
    return `https://news.google.com/${value}`;
  }

}
