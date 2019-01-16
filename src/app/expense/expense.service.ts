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
  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(this.expenseUrl + '/' + id);
    // .pipe(
    //   catchError(this.handleError('getExpense', []))
    // );
  }

  /** POST: add a new expense to the database */
  addExpense (expense: Expense): Observable<Expense> {
    // @ts-ignore
    // Dit werkt en is de enige manier (zover ik weet) om de responsetype aan te geven.
    // Toch geeft IntelliJ de error "Type '"text"' is not assignable to type '"json"'.".
    return this.http.post<Expense>(this.expenseUrl, expense, {responseType: 'text'});
      // .pipe(
      //   catchError(this.handleError('addHero', expense))
      // );
  }
}
