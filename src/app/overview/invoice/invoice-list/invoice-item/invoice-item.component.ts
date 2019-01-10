import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from '../../invoice.model';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  @Input() invoice: Invoice;

  constructor() {
  }

  ngOnInit() {
  }

}
