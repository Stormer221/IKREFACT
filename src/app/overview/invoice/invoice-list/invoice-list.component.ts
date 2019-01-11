import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  private invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.invoices = this.invoiceService.getInvoices();
  }

}
