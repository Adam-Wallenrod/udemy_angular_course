import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {
  transform(value: string) {
    const splitString = value.split('');
    // console.log('splitString: ', splitString);
    const reverseArray = splitString.reverse();
    // console.log('reverseArray" ', reverseArray);
    // console.log(reverseArray.join(''));
    return reverseArray.join('');
  }


}


