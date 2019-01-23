import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from './contact.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(contacts: Contact[], searchTerm: string): Contact[] {
    return searchTerm ? contacts.filter(contact => {
      return (contact.firstName + (contact.infix ? (' ' + contact.infix + ' ') : ' ') +
        contact.surname).toLowerCase().includes(searchTerm.toLowerCase());
    }) : contacts;
  }

}
