import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  saveInvoice() {

  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }
}
