import {Component, OnInit} from '@angular/core';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  public invoices: InvoiceModel[] = [];
  public invoice: InvoiceModel = new InvoiceModel('', '',
    '', null, null, '', '', null, null);
  public page = 1;
  public sort: string;
  public desc: boolean;
  public rest: number;
  private i = 0;
  private j = 0;
  private g = 0;
  public amount_rows = 0;
  public items_per_page = 5;
  public searchTerm: string;

  constructor(private invoiceService: InvoiceService, private router: Router) {
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
        this.invoices.push(this.invoice);
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
    setTimeout(() => {
      this.invoiceService.getInvoices()
        .subscribe((invoices: InvoiceModel[]) => this.invoices = invoices);
    }, 300);
  }

  downloadPDF(invoiceID: number) {
    this.invoiceService.getPDF(invoiceID);
  }

  blankRows() {
    if (this.invoices.length !== 0 && this.invoices.length % this.items_per_page !== 0) {
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

  goToInvoiceDetails(id) {
    if (id) {
      this.invoiceService.getInvoiceById(id);
      this.router.navigate(['overzichten/factuur/', id]);
    }

  }
}
