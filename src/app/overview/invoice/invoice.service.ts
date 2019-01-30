import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {InvoiceModel} from './invoice.model';
import {Quotation} from '../quotation/quotation.model';
import {retry} from 'rxjs/operators';

@Injectable()
export class InvoiceService {
  invoiceURL = 'http://gefeliciflappeltaart.nl:8080/walbert/invoices';

  constructor(private http: HttpClient) {
  }

  getInvoices(): Observable<InvoiceModel[]> {
    return this.http.get<InvoiceModel[]>(this.invoiceURL).pipe(retry(4));
  }

  getPDF(invoiceID: number): void {
    const downloadString = this.invoiceURL + '/pdf/' + invoiceID;

    this.http.get(downloadString, {responseType: 'blob'}).pipe(retry(4)).subscribe((response) => {
      const blob = new Blob([response], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'factuur' + invoiceID + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  addInvoice(invoice: InvoiceModel): Observable<InvoiceModel> {
    // @ts-ignore
    return this.http.post<InvoiceModel>(this.invoiceURL, invoice, {responseType: 'text'}).pipe(retry(4));
  }

  getInvoiceById(id: number): Observable<InvoiceModel> {
    return this.http.get<InvoiceModel>(this.invoiceURL + '/' + id).pipe(retry(4));
  }

  deleteQuotation(id: number) {
    // @ts-ignore
    return this.http.delete<Quotation>(this.invoiceURL + '/' + id, {responseType: 'text'}).pipe(retry(4));
  }

  updateInvoice(invoice: InvoiceModel): Observable<InvoiceModel> {
    // @ts-ignore
    return this.http.put<InvoiceModel>(this.invoiceURL, invoice, {responseType: 'text'}).pipe(retry(4));

  }
}

