import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact-model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: Contact[] = [
    new Contact('Timmety', '', 'Baass', 1234567890, 'straat', 4,
      'email@address.io', '1234AB' ),
    new Contact('voormaan', 'tussenvoegsel', 'achternaam', 1234567890, 'straat', 4,
      'email@address.io', '1234AB' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
