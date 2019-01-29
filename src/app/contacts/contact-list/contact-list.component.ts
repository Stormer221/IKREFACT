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

  private contact: Contact;
  private searchTerm: string;


  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getReq()
      .subscribe((contact: Contact[]) => this.contacts = contact);

    if (this.contact) {
      this.contactService.deleteContact(this.contact.contactID).subscribe();
      this.contactService.addContact(this.contact).subscribe(contact => this.contacts.push(contact));
    }
  }
}
