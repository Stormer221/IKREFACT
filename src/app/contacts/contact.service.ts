import {Contact} from './contact.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ContactService {
  private contactsUrl = 'http://gefeliciflappeltaart.nl:8080/walbert/contacts';

  constructor(private http: HttpClient) {
  }

  deleteContact(contactID: number): Observable<{}> {
    return this.http.delete<Contact>('walbert/contacts/' + contactID).pipe(retry(4));
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl).pipe(retry(4));
  }

  getSingleContact(contactID: number): Observable<Contact> {
    return this.http.get<Contact>(this.contactsUrl + '/' + contactID).pipe(retry(4));
  }

  addContact(contact: Contact): Observable<Contact> {
    // @ts-ignore
    return this.http.post(this.contactsUrl, contact, {responseType: 'json'})
    .pipe( retry(4),
      catchError(err => 'Something went wrong')
    );
  }

  editContact(contact: Contact): Observable<Contact> {
    // @ts-ignore
    return this.http.put(this.contactsUrl, contact, {responseType: 'json'}).pipe(retry(4));
    // .pipe(
    //   catchError(this.handleError('addHero', expense))
    // );
  }
}
