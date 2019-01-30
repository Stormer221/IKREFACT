import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuotationService} from '../quotation.service';
import {Quotation} from '../quotation.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quotation-edit',
  templateUrl: './quotation-edit.component.html',
  styleUrls: ['./quotation-edit.component.css']
})
export class QuotationEditComponent implements OnInit {
  quotation: Quotation;
  quotationForm: FormGroup;

  constructor(private router: Router, private quotationService: QuotationService) {
  }

  ngOnInit() {
    this.quotationForm = new FormGroup({
      'title': new FormControl(),
      'date': new FormControl(),
      'deliverydate': new FormControl(),
      'price': new FormControl(),
      'description': new FormControl(),
      'delivery': new FormControl(),
      'concerns': new FormControl(),
      'hours': new FormControl()
    });

  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }

  submitQuotation() {
    this.quotationService.addQuotation(this.quotation);
  }



}
