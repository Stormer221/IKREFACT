import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from '../invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  private invoices: Invoice[] = [
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, 'LOL!', true, '1998-4-4'),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, 'DROL!', true, '1998-4-4'),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, 'BOL!', true, '1998-4-4'),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, 'JOL!', true, '1998-4-4')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
