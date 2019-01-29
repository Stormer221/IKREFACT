import {Component, OnInit} from '@angular/core';
import {Quotation} from '../quotation.model';
import {QuotationService} from '../quotation.service';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {

  quotations: Quotation[] = [];
  quotation: Quotation = new Quotation('', '', '', null, '', null);
  private searchTerm: string;
  private quotation_page = 1;
  private sort: string;
  private desc: boolean;
  private rest: number;
  private i = 0;
  private j = 0;
  private g = 0;
  private amount_rows = 0;
  private items_per_page = 5;

  constructor(private quotationService: QuotationService) {
  }

  ngOnInit() {
    this.quotationService.getQuotation()
      .subscribe(result => console.log(result));
    this.quotationService.getQuotation()
      .subscribe((quotations: Quotation[]) =>
        this.quotations = quotations);
  }

  sortBy(field: string) {
    if (field === this.sort && !this.desc) {
      this.desc = true;
      while (this.j < this.amount_rows) {
        this.quotations.splice(-1, 1);
        this.j = this.j + 1;
      }
      this.j = 0;
      this.quotations = this.quotations.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
      while (this.g < this.amount_rows) {
        this.quotations.push(this.quotation);
        this.g = this.g + 1;
      }
      this.g = 0;
    } else {
      this.sort = field;
      this.desc = false;
      this.quotations = this.quotations.sort((a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));

    }
  }

  blankRows() {
    if (this.quotations.length !== 0 && this.quotations.length % this.items_per_page !== 0) {
      this.rest = this.quotations.length % this.items_per_page;
      this.amount_rows = this.items_per_page - this.rest;
      while (this.i < this.amount_rows) {
        this.quotations.push(this.quotation);
        this.i = this.i + 1;
      }
      return this.quotations;
    } else {
      return this.quotations;
    }
  }

  downloadPDF(quotationID: number) {
    console.log('QID: ' + quotationID);
    this.quotationService.getPDF(quotationID);
  }
}
