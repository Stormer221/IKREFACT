import {Contact} from './contact.model';
import {Injectable} from '@angular/core';
import {Route} from '@angular/router';

@Injectable()
export class ContactService {
  private contacts: Contact[] = [
    new Contact('Timmety', '', 'Baass', 'Leiden', 'kerkstraat', 108, '1234567890',
      'timmety@gmail.com', '2956 PD', 1),
    new Contact('mark', 'tussenvoegsel', 'achternaam', 'Alkmaar', 'boerhaavleaan', 28,
      '0634870689', 'markmail@gmail.com', '4826 DP', 2)
  ];

  constructor() {}

  getContacts() {
    return this.contacts;
  }
  
  getContact(id: number) {
    const contact = this.contacts.find(
      (c) => {
        return c.id === id;
      }
    );
    return contact;
  }
}
