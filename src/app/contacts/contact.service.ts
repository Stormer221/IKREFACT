import {Contact} from './contact.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContactService {
  private contactsUrl = 'http://gefeliciflappeltaart.nl:8080/walbert/contacts';

  constructor(private http: HttpClient) {
  }

  deleteContact(contactID: number): Observable<{}> {
    return this.http.delete<Contact>('walbert/contacts/' + contactID);
  }

  getReq(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  getSingleContact(contactID: number): Observable<Contact> {
    return this.http.get<Contact>(this.contactsUrl + '/' + contactID);
  }

  addContact(contact: Contact): Observable<Contact> {
    // @ts-ignore
    return this.http.post(this.contactsUrl, contact, {responseType: 'json'});
    // .pipe(
    //   catchError(this.handleError('addHero', expense))
    // );
  }

  editContact(contact: Contact): Observable<Contact> {
    // @ts-ignore
    return this.http.put(this.contactsUrl, contact, {responseType: 'json'});
    // .pipe(
    //   catchError(this.handleError('addHero', expense))
    // );
  }
}
