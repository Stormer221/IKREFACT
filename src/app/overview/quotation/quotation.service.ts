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

  getPDF(quotationID: number): void {
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

