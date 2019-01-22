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
  private model: Expense = new Expense();
  private id: number = null;

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
    if (this.id) {
      this.expenseService.putExpense(this.model).subscribe();
      this.router.navigate(['/onkosten/' + this.id]);
    } else {
      this.expenseService.addExpense(this.model).subscribe();
      this.router.navigate(['/onkosten']);
    }
  }

  onCancel() {
    if (this.id) {
      this.router.navigate(['/onkosten/' + this.id]);
    } else {
      this.router.navigate(['/onkosten']);
    }
  }
}
