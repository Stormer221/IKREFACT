
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {InvoiceModel} from './invoice.model';

@Injectable()
export class InvoiceService {
  invoiceURL = '/walbert/invoices';

  constructor(private http: HttpClient) {
  }

  getInvoices(): Observable<InvoiceModel[]> {
    return this.http.get<InvoiceModel[]>(this.invoiceURL);
  }

  getPDF(invoiceID: number): void {
    const downloadString = this.invoiceURL + '/pdf/' + invoiceID;

    this.http.get(downloadString, { responseType: 'blob'}).subscribe((response) => {
      const blob = new Blob([response], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'factuur' + invoiceID + '.pdf';
      link.click();
    });
  }

  addInvoice(invoice: InvoiceModel): Observable<InvoiceModel> {
    // @ts-ignore
    return this.http.post<InvoiceModel>(this.invoiceURL, invoice, {responseType: 'text'});
  }
}

