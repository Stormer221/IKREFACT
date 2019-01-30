import {Component, OnInit} from '@angular/core';
import {Quotation} from '../quotation.model';
import {QuotationService} from '../quotation.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css']
})
export class QuotationDetailComponent implements OnInit {
  private id: number;
  public quotation: Quotation;

  constructor(private quotationService: QuotationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.quotation = this.route.snapshot.data.params;
          this.getQuotation(params);
          console.log(params);
        });

  }

  getQuotation(params: Params) {
    this.quotationService.getQuotationById(params['quotationID']).subscribe(
      (quotation: Quotation) => {
        this.quotation = quotation;
      }
    );
  }

  toOverview() {
    this.router.navigate(['overzichten']);
  }


  modifyQuotations() {

  }

  deleteQuotations() {
    if (confirm('Weet je zeker dat je "' + this.quotation.title + '" wilt verwijderen?')) {
      this.quotationService.deleteQuotation(this.quotation.quotationID).subscribe();
      this.router.navigate(['overzichten']);
    }
  }
}
