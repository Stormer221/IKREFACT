import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'expensefilter'
})
export class ExpenseFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(it => {
      const costItem = it.costItem.toLowerCase().includes(searchTerm.toLowerCase());
      const title = it.title.toString().toLowerCase().includes(searchTerm.toLowerCase());
      const description = it.description.toLowerCase().includes(searchTerm.toLowerCase());
      return (costItem + title + description);
    });
  }

}
