import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../contact.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


}
