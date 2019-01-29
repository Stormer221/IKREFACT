import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {InvoiceModel} from '../invoice.model';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  private id: number;
  public invoice: InvoiceModel;

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.invoice = this.route.snapshot.data.params;
          this.getInvoice(params);

        });
  }

  getInvoice(params: Params) {
    this.invoiceService.getInvoiceById(+params['invoiceID']).subscribe(
      (invoice: InvoiceModel) => {
        this.invoice = invoice;
      }
    );
  }

  toOverview() {
    this.router.navigate(['overzichten']);
  }

  deleteInvoice(id) {
    if (confirm('Weet je zeker dat je "' + this.invoice.title + '" wilt verwijderen?')) {
      this.invoiceService.deleteQuotation(this.invoice.invoiceID).subscribe();
      this.router.navigate(['overzichten']);
    }
  }

  modifyInvoice() {

  }
}
