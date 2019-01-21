import {Contact} from './contact.model';
import {Injectable} from '@angular/core';
import {HttpReqInterface} from '../httpReq.interface';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map, subscribeOn} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';

@Injectable()
export class ContactService implements HttpReqInterface {
  private contacts: Contact[] = [];
  private contact: Contact;

  contactsUrl = 'walbert/contacts';

  constructor(private http: HttpClient) {
  }

  getContacts() {
    // this.getReq();
    // return this.contacts;
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
    return this.http.get<Contact[]>(this.contactsUrl)
      ;

  }

  getSingleContact(contactID: number): Observable<Contact> {
    return this.http.get<Contact>('walbert/contacts/' + contactID);
  }

  postReq() {
  }

  putReq() {
  }

  addContact(contact: Contact){
    // copy van expense
    // @ts-ignore
    // Dit werkt en is de enige manier (zover ik weet) om de responsetype aan te geven.
    // Toch geeft IntelliJ de error "Type '"text"' is not assignable to type '"json"'.".
    return this.http.post<Contact>(this.contactsUrl, contact, {responseType: 'text'});
    // .pipe(
    //   catchError(this.handleError('addHero', expense))
    // );
    
  }
}
