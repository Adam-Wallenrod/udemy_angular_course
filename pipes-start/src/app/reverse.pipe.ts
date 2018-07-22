import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {
  transform(value: string) {
    let splitString = value.split('');
    console.log('splitString: ', splitString);
    let reverseArray = splitString.reverse();
    console.log('reverseArray" ', reverseArray);
    console.log(reverseArray.join(''));
    return reverseArray.join('');;
  }


}


