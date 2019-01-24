import {Component, OnInit} from '@angular/core';
import {Quotation} from '../quotation.model';
import {QuotationService} from '../quotation.service';
import {InvoiceModel} from '../../invoice/invoice.model';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {

  quotations: Quotation[] = [];
  private quotation_page = 1;
  private sort: string;
  private desc: boolean;

  constructor(private quotationService: QuotationService) {
  }

  ngOnInit() {
    this.quotationService.getQuotation()
      .subscribe(result => console.log(result));
    this.quotationService.getQuotation()
      .subscribe((quotations: Quotation[]) => this.quotations = quotations);
  }

  sortBy(field: string) {
    if (field === this.sort && !this.desc) {
      this.desc = true;
      this.quotations = this.quotations.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    } else {
      this.sort = field;
      this.desc = false;
      this.quotations = this.quotations.sort((a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
    }

  }
}
