import {Component, OnInit} from '@angular/core';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';
import {ExpenseModel} from '../../../expense/expense.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  private invoices: InvoiceModel[];
  private page = 1;
  private sort: string;
  private desc: boolean;

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
}
