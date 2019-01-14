import {Contact} from './contact.model';
import {Injectable} from '@angular/core';
import {HttpReqInterface} from '../httpReq.interface';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ContactService implements HttpReqInterface {
  private contacts: Contact[] = [
    // new Contact('Timmety', '', 'Baass', 'Leiden', 'kerkstraat', 108, '1234567890',
    //   'timmety@gmail.com', '2956 PD', 1),
    // new Contact('mark', 'tussenvoegsel', 'achternaam', 'Alkmaar', 'boerhaavleaan', 28,
    //   '0634870689', 'markmail@gmail.com', '4826 DP', 2)
  ];

  contactsurl = 'walbert/contacts';

  constructor(private http: HttpClient) {
  }

  getContacts() {
    // this.getReq();
    return this.contacts;
  }

  getContact(id: number) {
    const contact = this.contacts.find(
      (c) => {
        return c.contactID === id;
      }
    );
    return contact;
  }

  deleteReq() {
  }

  getReq(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsurl)
      ;

  }

  getSingleContact(contactID: number): Observable<Contact> {
    return this.http.get<Contact>('walbert/contacts/' + contactID);
  }

  postReq() {
  }

  putReq() {
  }
}
