import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {InvoiceService} from '../invoice.service';
import {InvoiceModel} from '../invoice.model';
import {Contact} from '../../../contacts/contact.model';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {
  public invoice: InvoiceModel = new InvoiceModel;
  private editInvoice = false;

  constructor(private router: Router, private route: ActivatedRoute, private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['invoiceID'] > '0') {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.fillInvoiceForm(params);
          });
    }
    }

  private fillInvoiceForm(params: Params) {
    this.invoiceService.getInvoiceById(params['invoiceID'])
      .subscribe(
        (invoice: InvoiceModel) => {
          this.invoice = invoice;
          this.editInvoice = true;
        });
  }

  toContacts() {
    this.router.navigate(['/contacten', this.route.snapshot.params['contactID']]);
  }

  submitInvoice() {
    if (this.editInvoice) {
      this.invoiceService.updateInvoice(this.invoice).subscribe();
    }
    if (!this.editInvoice) {
      this.invoiceService.addInvoice(this.invoice).subscribe();
    }
  }
}
