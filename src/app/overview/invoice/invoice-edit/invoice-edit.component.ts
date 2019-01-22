import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../../contacts/contact.model';


@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  contact: Contact;

  ngOnInit() {

  }

  saveInvoice() {

  }

  toContacts() {
    this.router.navigate(['/contacten', this.route.snapshot.params['contactID']]);
    console.log(this.route.snapshot.params['contactID']);
  }
}
