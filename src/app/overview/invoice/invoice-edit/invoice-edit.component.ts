import {Component, OnInit} from '@angular/core';
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

  constructor(private router: Router,
              private invoiceService: InvoiceService) {
  }

  ngOnInit() {
  }

  toContacts() {
    this.router.navigate(['/contacten']);
  }

  submitInvoice() {
    this.invoiceService.addInvoice(this.invoice).subscribe();
  }
}
