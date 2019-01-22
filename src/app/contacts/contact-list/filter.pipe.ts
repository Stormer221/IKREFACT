import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from '../contact.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(contacts: Contact[], searchTerm: string): Contact[] {
    if (!contacts || !searchTerm) {
      return contacts;
    }
    return contacts.filter(contact =>
    contact.firstName.toLowerCase().indexOf(searchTerm));
  }

}
