import {Injectable} from '@angular/core';
import {Quotation} from './quotation.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExpenseModel} from '../../expense/expense.model';

@Injectable()
export class QuotationService {
  private quotationURL = 'http://gefeliciflappeltaart.nl:8080/walbert/quotations';

  constructor(private http: HttpClient) {
  }


  public getQuotation(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.quotationURL);
  }

  public getQuotationById(id: number): Observable<Quotation> {
    return this.http.get<Quotation>(this.quotationURL + '/' + id);
  }

  public deleteQuotation(id: number): Observable<{}> {
    // @ts-ignore
    return this.http.delete<Quotation>(this.quotationURL + '/' + id, {responseType: 'text'});
  }

  public getPDF(quotationID: number): void {
    const downloadString = this.quotationURL + '/pdf/' + quotationID;

    this.http.get(downloadString, {responseType: 'blob'}).subscribe((response) => {
      const blob = new Blob([response], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'offerte' + quotationID + '.pdf';
      link.click();
    });
  }

  putQuotation(quotation: Quotation): Observable<Quotation> {
    // @ts-ignore
    return this.http.put<ExpenseModel>(this.quotationURL, quotation, {responseType: 'text'});

  }

  public addQuotation(quotation: Quotation): Observable<Quotation> {
    // @ts-ignore
    return this.http.post<Quotation>(this.quotationURL, quotation, {responseType: 'text'});
  }
}

