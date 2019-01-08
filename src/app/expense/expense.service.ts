import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {Expense} from "./expense";

/**
 * @author Sergi Philipsen
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic Rmlyc3RVc2VyOmZpcnN0' // Dit had postman gegenerate, hoop dat t werkt.
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
  getExpense (): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl)
      // .pipe(
      //   catchError(this.handleError('getExpense', []))
      // );
  }

}
