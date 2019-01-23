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

  constructor(private quotationService: QuotationService) {
  }

  ngOnInit() {
    this.quotationService.getQuotation()
      .subscribe(result => console.log(result));
    this.quotationService.getQuotation()
      .subscribe((quotations: Quotation[]) => this.quotations = quotations);
  }
}
