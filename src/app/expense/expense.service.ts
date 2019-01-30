import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExpenseModel} from './expense.model';
import {CostItemModel} from "./costItem.model";

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
  private expenseUrl = 'http://gefeliciflappeltaart.nl:8080/walbert/expenses';
  /** Base url for the costItem API */
  private costItemUrl = 'http://gefeliciflappeltaart.nl:8080/walbert/costItems';

  constructor(private http: HttpClient) {
  }

  /** GET expenses from the server */
  getExpense(): Observable<ExpenseModel[]> {
    return this.http.get<ExpenseModel[]>(this.expenseUrl);
  }

  /** GET expenses from the server */
  getExpenseById(id: number): Observable<ExpenseModel> {
    return this.http.get<ExpenseModel>(this.expenseUrl + '/' + id);
  }

  /** POST: add a new expense to the database */
  addExpense(expense: ExpenseModel): Observable<ExpenseModel> {
    /**
     * This is the only way to set the responsetype to text as far as i know.
     * This implementation creates a warning in IntelliJ although it fixes the error. For this reason im ignoring it.
     * */
    // @ts-ignore
    return this.http.post<ExpenseModel>(this.expenseUrl, expense, {responseType: 'text'});
  }

  /** PUT: update an existing expense in the database */
  putExpense(expense: ExpenseModel): Observable<ExpenseModel> {
    // @ts-ignore
    return this.http.put<ExpenseModel>(this.expenseUrl, expense, {responseType: 'text'});
  }

  /** POST: delete an expense from the database */
  deleteExpense(id: number): Observable<any> {
    // @ts-ignore
    return this.http.delete<any>(this.expenseUrl + '/' + id, {responseType: 'text'})
  }

  /** GET constItems from the server **/
  getCostItem(): Observable<CostItemModel[]> {
    return this.http.get<CostItemModel[]>(this.costItemUrl);
  }

  /** POST: add a new expense to the database */
  addCostItem(costItem: CostItemModel): Observable<CostItemModel> {
    // @ts-ignore
    return this.http.post<CostItemModel>(this.costItemUrl, costItem, {responseType: 'text'});
  }
}
