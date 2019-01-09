import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expense} from './expense';

/**
 * @author Sergi Philipsen
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('FirstUser:First')
  })
};


@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  expenseUrl = 'walbert/expenses';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET expenses from the server */
  getExpense(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl, httpOptions);
    // .pipe(
    //   catchError(this.handleError('getExpense', []))
    // );
  }

}
