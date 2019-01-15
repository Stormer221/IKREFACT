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
  private expense: Expense;

  constructor(private router: Router, private expenseService: ExpenseService) {
  }

  ngOnInit() {
  }

  submitExpense() {
    this.expense = new Expense('Reis naar haarlem',
      'Reis naar haarlem om met Tom te overleggen', 'reiskosten', 22.95, new Date().toLocaleDateString(), 'NS');
    this.expenseService.addExpense(this.expense);
    console.log(new Expense('Reis naar haarlem',
      'Reis naar haarlem om met Tom te overleggen', 'reiskosten', 22.95, new Date().toLocaleDateString(), 'NS'));
  }
}
