import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expense} from './expense';

/**
 * @author Sergi Philipsen
 */

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
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

  /** GET expenses from the server */
  getExpenseById(id: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl + '/' + id);
    // .pipe(
    //   catchError(this.handleError('getExpense', []))
    // );
  }

  /** POST: add a new expense to the database */
  addExpense (expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expenseUrl, expense)
      // .pipe(
      //   catchError(this.handleError('addHero', expense))
      // );
  }

}
