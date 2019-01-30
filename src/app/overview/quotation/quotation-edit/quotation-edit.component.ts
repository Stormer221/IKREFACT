import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {QuotationService} from '../quotation.service';
import {Quotation} from '../quotation.model';

@Component({
  selector: 'app-quotation-edit',
  templateUrl: './quotation-edit.component.html',
  styleUrls: ['./quotation-edit.component.css']
})
export class QuotationEditComponent implements OnInit {
  public quotation: Quotation = new Quotation();
  public id: number = null;

  constructor(private router: Router, private quotationService: QuotationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['quotationID'];
        console.log(this.id);
        if (this.id) {
          this.quotationService.getQuotationById(this.id)
            .subscribe(result => this.quotation = result);
        }
      }
    );
  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }

  submitQuotation() {
    if (this.id) {
      this.quotationService.putQuotation(this.quotation).subscribe();
      setTimeout( () => {

        this.router.navigate(['/overzichten/offerte/' + this.id]);
      }, 1000);

    } else {
      console.log(this.quotation);
      this.quotationService.addQuotation(this.quotation);
      this.router.navigate(['overzichten']);
    }


  }
}
