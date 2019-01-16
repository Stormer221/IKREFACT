import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Expense} from '../expense';
import {ExpenseService} from '../expense.service';

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
  private model: Expense = new Expense();
  private id = null;

  constructor(
    private router: Router,
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.id) {
          this.expenseService.getExpenseById(this.id)
            .subscribe(result => this.model = result);
        }
      }
    );
  }

  submitExpense() {
    // Give the date the right format.
    // this.model.date = formatDate(this.model.date, 'dd/MM/yyyy', 'nl');
    // Save
    if (this.id) {
      this.expenseService.putExpense(this.model).subscribe();
    } else {
      this.expenseService.addExpense(this.model).subscribe();
    }
    this.router.navigate(['/onkosten']);
  }
}
