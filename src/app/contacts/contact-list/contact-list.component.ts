import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  filteredContacts: Contact[];

  private contact: Contact;
  private searchTerm: string;

  getSearchTerm() {
    return this.searchTerm;
  }

  setSearchTerm(value: string) {
    this.searchTerm = value;
    this.filteredContacts = this.filterContacts(value);
  }

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getReq()
      .subscribe((contact: Contact[]) => this.contacts = contact);
    this.contactService.getReq().subscribe(result => console.log(result));

    this.contactService.deleteContact(this.contact.contactID).subscribe();
    this.contactService.addContact(this.contact).subscribe(contact => this.contacts.push(contact));
    this.filteredContacts = this.contacts;

  }

  private filterContacts(searchString: string) {
    return this.contacts.filter(contact =>
      contact.firstName.toLowerCase().indexOf(searchString));
  }


}
