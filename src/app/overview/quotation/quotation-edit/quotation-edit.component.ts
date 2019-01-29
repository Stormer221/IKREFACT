import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuotationService} from '../quotation.service';
import {Quotation} from '../quotation.model';

@Component({
  selector: 'app-quotation-edit',
  templateUrl: './quotation-edit.component.html',
  styleUrls: ['./quotation-edit.component.css']
})
export class QuotationEditComponent implements OnInit {
  quotation: Quotation;

  constructor(private router: Router, private quotationService: QuotationService) {
  }

  ngOnInit() {
  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }

  submitQuotation() {
    this.quotationService.addQuotation(this.quotation);
  }



}
