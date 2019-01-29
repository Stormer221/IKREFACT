import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'invoicefilter'
})
export class InvoiceFilterPipe implements PipeTransform {


  transform(item: any, searchTerm: string): any {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(it => {
      const title = it.title.toString().includes(searchTerm);
      const description = it.description.toLowerCase().includes(searchTerm.toLowerCase());
      const date = it.date.toLowerCase().includes(searchTerm.toLowerCase())
      console.log(title + description + date);
      return (title + description + date);
    });
  }

}
