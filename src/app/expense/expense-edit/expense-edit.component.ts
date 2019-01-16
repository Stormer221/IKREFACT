import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Expense} from '../expense';
import {ExpenseService} from '../expense.service';
import {formatDate} from "@angular/common";

/***
 * The ExpenseEditComponent.
 *
 * This Component will edit and save new or existing Expenses.
 *
 * @author Sergi Philipsen.
 */

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  // Create empty Expense for the form to fill in.
  // TODO: Check if the Expense exists or not.
  private model: Expense = new Expense();

  constructor(private router: Router, private expenseService: ExpenseService) {
  }

  ngOnInit() {
  }

  submitExpense() {
    // Give the date the right format.
    this.model.date = formatDate(this.model.date, 'dd/MM/yyyy', 'nl');
    // Save
    this.expenseService.addExpense(this.model).subscribe();
  }
}
