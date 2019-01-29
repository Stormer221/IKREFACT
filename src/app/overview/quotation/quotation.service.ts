import {Injectable} from '@angular/core';
import {Quotation} from './quotation.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class QuotationService {
  quotationURL = 'walbert/quotations';

  constructor(private http: HttpClient) {
  }


  getQuotation(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.quotationURL);
  }

  getQuotationById(id: number): Observable<Quotation> {
    return this.http.get<Quotation>(this.quotationURL + '/' + id);
  }

  deleteQuotation(id: number): Observable<{}> {
    // @ts-ignore
    return this.http.delete<Quotation>(this.quotationURL + '/' + id, {responseType: 'text'});
  }

}

