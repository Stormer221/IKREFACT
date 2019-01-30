import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[];
  public contact: Contact;
  public searchTerm: string;


  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getReq()
      .subscribe((contact: Contact[]) => this.contacts = contact.sort((a, b) => (
        a['surname'] > b['surname']) ? 1 : ((b['surname'] > a['surname']) ? -1 : 0)));
  }
}
