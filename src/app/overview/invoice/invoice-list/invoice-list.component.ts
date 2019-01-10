import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from '../invoice.model';
import {Contact} from '../../../contacts/contact';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  private invoices: Invoice[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
