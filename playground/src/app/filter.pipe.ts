import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  // transform(arrayToFilter: any[], key?: string, keyValue?: any): any {
  //
  //   let filteredPipe: any[] = [];
  //
  //   for (let i = 0; i < arrayToFilter.length; i++) {
  //     console.log('loop');
  //     if (arrayToFilter[i][key] === keyValue) {
  //       filteredPipe.push(arrayToFilter[i]);
  //       console.log(arrayToFilter[i]);
  //     }
  //
  //   }
  //
  //   return filteredPipe;
  // }


  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }

    // return items.filter(item => item.title.indexOf(filter.title) !== -1);
    return items.filter(item => item.title === filter['title']);
  }
}
