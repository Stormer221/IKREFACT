import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expense} from './expense';
import {HttpReqInterface} from '../httpReq.interface';

/**
 * @author Sergi Philipsen
 */

@Injectable({
  providedIn: 'root'
})

export class ExpenseService implements HttpReqInterface {
  expenseUrl = '/walbert/expenses';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET expenses from the server */
  getExpense(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl);
    // .pipe(
    //   catchError(this.handleError('getExpense', []))
    // );
  }

  deleteReq() {
  }

  getReq() {
  }

  postReq() {
  }

  putReq() {
  }

}
