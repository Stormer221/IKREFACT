import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuotationService} from '../quotation.service';

@Component({
  selector: 'app-quotation-edit',
  templateUrl: './quotation-edit.component.html',
  styleUrls: ['./quotation-edit.component.css']
})
export class QuotationEditComponent implements OnInit {

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
