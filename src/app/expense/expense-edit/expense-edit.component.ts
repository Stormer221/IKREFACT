import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Expense} from '../expense';
import {ExpenseService} from '../expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  private model: Expense = new Expense('', '', '', null, '', '');

  constructor(private router: Router, private expenseService: ExpenseService) {
  }

  ngOnInit() {
  }

  submitExpense() {
    this.expenseService.addExpense(this.model).subscribe();
  }
}
