import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExpenseService} from '../expense.service';
import {ExpenseModel} from '../expense.model';

/**
 * The ExpenseDetailComponent.
 *
 * This shows the details of the ExpenseModel and gives options to edit or delete it.
 *
 * @author Sergi Philipsen.
 */

@Component({
  selector: 'app-expenseitem',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  private id: number;
  public expense: ExpenseModel;

  constructor(private expenseService: ExpenseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.expenseService.getExpenseById(this.id)
          .subscribe(result => this.expense = result);
      }
    );
  }

  deleteExpense() {
    if (confirm('Weet je zeker dat je "' + this.expense.title + '" wilt verwijderen?')) {
      this.expenseService.deleteExpense(this.expense.expenseID).subscribe();
      this.router.navigate(['/onkosten']);
    }
  }
}
