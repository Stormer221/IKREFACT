import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ContactService} from './contact.service';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService {

  constructor(private contactService: ContactService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Contact>> | Promise<Observable<Contact>> |
    Observable<Contact> {
    return this.contactService.getSingleContact(route.params.id);
  }


}

