import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {ExpenseService} from '../expense/expense.service';
import {ExpenseModel} from '../expense/expense.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  private expenses: ExpenseModel[];

  constructor(private router: Router, private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseService.getExpense().subscribe(result => this.expenses = result);
  }
}
