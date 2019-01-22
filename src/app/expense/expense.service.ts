import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expense} from './expense';

/**
 * The ExpenseService.
 *
 * The Service contains CRUD functions for making HttpRequests with the API.
 *
 * @author Sergi Philipsen
 */

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  /** Base url for the expense API */
  expenseUrl = '/walbert/expenses';

  constructor(private http: HttpClient) {
  }

  /** GET expenses from the server */
  getExpense(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl);
  }

  /** GET expenses from the server */
  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(this.expenseUrl + '/' + id);
  }

  /** POST: add a new expense to the database */
  addExpense(expense: Expense): Observable<Expense> {
    /**
     * This is the only way to set the responsetype to text as far as i know.
     * This implementation creates a warning in IntelliJ although it fixes the error. For this reason im ignoring it.
     * */
    // @ts-ignore
    return this.http.post<Expense>(this.expenseUrl, expense, {responseType: 'text'});
  }

  /** PUT: update an existing expense in the database */
  putExpense(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(this.expenseUrl, expense);
  }

  /** POST: delete an expense from the database */
  deleteExpense(id: number): Observable<any> {
    return this.http.delete<any>(this.expenseUrl + '/' + id)
  }
}
