import {Injectable} from '@angular/core';
import {Quotation} from './quotation-edit/quotation.model';

@Injectable()
export class QuotationService {
  private quotations: Quotation[] = [
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '1!', 1),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '2!', 2),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '3!', 3),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '4!', 4),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '5!', 5),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '6!', 6),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '7!', 7),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '8!', 8),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '9!', 9),
    new Quotation('Dit is een description', '1998-4-4', '1998-4-4',
      10.50, '10!', 10),
  ];


  getQuotations() {
    return this.quotations;
  }

}

