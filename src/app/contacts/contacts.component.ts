import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {

  }

  onNewContact() {
    this.router.navigate(['nieuw'], {relativeTo: this.route});
  }

  toOfferte() {
    this.router.navigate(['/offerte']);
  }


}
