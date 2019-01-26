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
  empty_invoice: InvoiceModel = new InvoiceModel('', '', '', null, null,
    '', '', null);
  private page = 1;
  private sort: string;
  private desc: boolean;
  private rest: number;
  private i = 0;
  private j = 0;
  private g = 0;
  private amount_rows = 0;
  private items_per_page = 5;

  constructor(private invoiceService: InvoiceService) {
  }

  sortBy(field: string) {
    if (field === this.sort && !this.desc) {
      this.desc = true;
      while (this.j < this.amount_rows) {
        this.invoices.splice(-1, 1);
        this.j = this.j + 1;
      }
      this.j = 0;
      this.invoices = this.invoices.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
      while (this.g < this.amount_rows) {
        this.invoices.push(this.empty_invoice);
        this.g = this.g + 1;
      }
      this.g = 0;
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
    if (this.invoices.length !== 0 && this.invoices.length % this.items_per_page !== 0) {
      this.rest = this.invoices.length % this.items_per_page;
      this.amount_rows = this.items_per_page - this.rest;
      while (this.i < this.amount_rows) {
        this.invoices.push(this.empty_invoice);
        this.i = this.i + 1;
      }
      return this.invoices;
    } else {
      return this.invoices;
    }
  }
}
