import {Component, OnInit} from '@angular/core';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';
import {ExpenseModel} from '../../../expense/expense.model';
import {Quotation} from '../../quotation/quotation.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: InvoiceModel[] = [];
  invoice: InvoiceModel = new InvoiceModel('', '', '', null, null,
    '', '', null);
  private page = 1;
  private sort: string;
  private desc: boolean;
  private rest: number;
  private i = 0;
  private amount_rows: number;
  private items_per_page = 5;

  constructor(private invoiceService: InvoiceService) {
  }

  sortBy(field: string) {
    if (field === this.sort && !this.desc) {
      this.desc = true;
      this.invoices = this.invoices.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    } else {
      this.sort = field;
      this.desc = false;
      this.invoices = this.invoices.sort((a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
    }
  }

  ngOnInit() {
    this.invoiceService.getInvoices()
      .subscribe(result => console.log(result));
    this.invoiceService.getInvoices()
      .subscribe((invoices: InvoiceModel[]) => this.invoices = invoices);
  }

  downloadPDF(invoiceID: number) {
    this.invoiceService.getPDF(invoiceID);
  }

  blankRows() {
    if (this.invoices.length !== 0 && this.invoices.length % 5 !== 0) {
      this.rest = this.invoices.length % this.items_per_page;
      this.amount_rows = this.items_per_page - this.rest;
      while (this.i < this.amount_rows) {
        this.invoices.push(this.invoice);
        this.i = this.i + 1;
      }
      return this.invoices;
    } else {
      return this.invoices;
    }
  }
}
