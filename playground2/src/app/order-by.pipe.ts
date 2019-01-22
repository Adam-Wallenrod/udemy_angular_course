import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key: string, asc: boolean): any {

    if(!key || key.trim() ==""){
      return array;
    }

    if(asc){
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item1[key],item2[key]);
      });
    }
    else {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item2[key],item1[key]);
      });
    }


  }

  orderByComparator(a: any, b: any): number{
  if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
    if(a.toLowerCase() < b.toLowerCase())
      return -1;
    if(a.toLowerCase() > b.toLowerCase())
      return 1;
  }else{
    if(parseFloat(a) < parseFloat(b)) return -1;
    if(parseFloat(a) > parseFloat(b)) return 11;
  }

  return 0;

  }

}


