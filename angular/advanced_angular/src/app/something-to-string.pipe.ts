import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'eTS'
})
export class SomethingToStringPipe implements PipeTransform {

  transform(controlErrors: ValidationErrors, type?: string): string {
    if (type === 'validationErrors'){
      let str: string = '';
      let i: number = 1;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
            str += String(i) + ': ' + controlErrors[keyError]+ '\n';
            i++;
        });
      }
      return str;
    }else{
      return 'Type not valid';
    }
  }

}
