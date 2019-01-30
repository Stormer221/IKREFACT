import {Injectable} from '@angular/core';
import {Quotation} from './quotation.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExpenseModel} from '../../expense/expense.model';
import {retry} from 'rxjs/operators';

@Injectable()
export class QuotationService {
  private quotationURL = 'http://gefeliciflappeltaart.nl:8080/walbert/quotations';

  constructor(private http: HttpClient) {
  }


  public getQuotation(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.quotationURL).pipe(retry(4));
  }

  public getQuotationById(id: number): Observable<Quotation> {
    return this.http.get<Quotation>(this.quotationURL + '/' + id).pipe(retry(4));
  }

  public deleteQuotation(id: number): Observable<{}> {
    // @ts-ignore
    return this.http.delete<Quotation>(this.quotationURL + '/' + id, {responseType: 'text'}).pipe(retry(4));
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
    return this.http.put<ExpenseModel>(this.quotationURL, quotation, {responseType: 'text'}).pipe(retry(4));

  }

  public addQuotation(quotation: Quotation): Observable<Quotation> {
    return this.http.post<Quotation>(this.quotationURL, quotation);
  }
}

