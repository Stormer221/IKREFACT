import {Invoice} from './invoice.model';
import {Injectable} from '@angular/core';

@Injectable()
export class InvoiceService {
  private invoices: Invoice[] = [
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '1!', true, '1998-4-4', 1),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '2!', true, '1998-4-4', 2),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '3!', true, '1998-4-4', 3),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '4!', true, '1998-4-4', 4),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '5!', true, '1998-4-4', 5),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '6!', true, '1998-4-4', 6),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '7!', true, '1998-4-4', 7),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '8!', true, '1998-4-4', 8),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '9!', true, '1998-4-4', 9),
    new Invoice('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '10!', true, '1998-4-4', 10)
  ];


  getInvoices() {
    return this.invoices;
  }

}

