import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../../contacts/contact.model';
import {Router} from '@angular/router';
import {InvoiceService} from '../invoice.service';
import {InvoiceModel} from '../invoice.model';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {
  private invoice: InvoiceModel = new InvoiceModel;

  constructor(private router: Router, private route: ActivatedRoute, private invoiceService: InvoiceService) {
  }

  contact: Contact;

  ngOnInit() {

  }

  toContacts() {
    this.router.navigate(['/contacten', this.route.snapshot.params['contactID']]);
    console.log(this.route.snapshot.params['contactID']);
  }

  submitInvoice() {
    this.invoiceService.addInvoice(this.invoice).subscribe();
  }
}
