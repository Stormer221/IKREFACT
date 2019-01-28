import {Component, OnInit} from '@angular/core';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  private invoices: InvoiceModel[];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.getInvoices()
      .subscribe((invoices: InvoiceModel[]) => this.invoices = invoices);
  }

  downloadPDF(invoiceID: number) {
    this.invoiceService.getPDF(invoiceID);
  }
}
