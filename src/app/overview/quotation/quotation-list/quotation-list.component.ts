import {Component, OnInit} from '@angular/core';
import {Quotation} from '../quotation-edit/quotation.model';
import {QuotationService} from '../quotation.service';

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
    this.quotations = this.quotationService.getQuotations();
  }

}
