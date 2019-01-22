import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Invoice} from '../../invoice';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {
  private invoice: Invoice = new Invoice;

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
    console.log('hallo');
  }
}
