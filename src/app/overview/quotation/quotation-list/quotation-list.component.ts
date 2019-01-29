import {Component, OnInit} from '@angular/core';
import {Quotation} from '../quotation.model';
import {QuotationService} from '../quotation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
  public quotations: Quotation[] = [];
  public quotation: Quotation = new Quotation('', '', '', null, '', null);
  public searchTerm: string;
  public quotation_page = 1;
  public sort: string;
  public desc: boolean;
  public rest: number;
  private i = 0;
  private j = 0;
  private g = 0;
  public amount_rows = 0;
  public items_per_page = 5;

  constructor(private quotationService: QuotationService, private router: Router) {
  }

  ngOnInit() {
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

  public downloadPDF(quotationID: number) {
    this.quotationService.getPDF(quotationID);
  }

  public goToQuotationDetails(id: number) {
    if (id) {
      this.quotationService.getQuotationById(id);
      this.router.navigate(['overzichten/offerte/' + id]);
    }
  }
}
