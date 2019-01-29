import {Injectable} from '@angular/core';
import {Quotation} from './quotation.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class QuotationService {
  private quotationURL = 'walbert/quotations';

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

    this.http.get(downloadString, { responseType: 'blob'}).subscribe((response) => {
      const blob = new Blob([response], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'factuur' + quotationID + '.pdf';
      link.click();
    });
  }

}

