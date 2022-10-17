import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, rate: number): unknown {
    return value - (value * rate / 100);
  }

}
