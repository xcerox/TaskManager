import { Pipe, PipeTransform } from '@angular/core';
import { translateToWords } from '@admin/shared/utils/number-convertion-util';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(value: number): string {
    return translateToWords(value) || '';
  }
}
