import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExpenseService} from './expense.service';
import {Expense} from './expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[];

  constructor(private router: Router, private expenseService: ExpenseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  getExpense(): void {
  }

  toExpenseEdit() {
    this.router.navigate(['nieuw'], {relativeTo: this.route});
  }

}
