import {Component, OnInit} from '@angular/core';
import {Expense} from '../expense';
import {ExpenseService} from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  private expenses: Expense[];

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseService.getExpense()
      .subscribe(result => {
        // @ts-ignore
        this.expenses = result.sort(function (a, b) {
          return -1 ? (a.date < b.date) : 1 ? (a.date > b.date) : 0
        });
      });
  }
}
