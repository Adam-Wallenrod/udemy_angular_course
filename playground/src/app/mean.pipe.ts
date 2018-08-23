import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'mean'
})

export class MeanPipe implements PipeTransform {
  transform(value: number[]): number {
    if(!Array.isArray(value)){
      return value;
    }
    if(value.length === 0){
      return undefined;
    }
    const sum = value.reduce(function(a,b){
      return a+b;
    });
    return sum / value.length;
  }

}
