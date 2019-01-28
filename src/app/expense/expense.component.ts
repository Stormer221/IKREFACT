import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExpenseService} from './expense.service';
import {ExpenseModel} from './expense.model';

/**
 * The Expense Component.
 *
 * Wrapper for the list and buttons.
 *
 * @author Sergi Philipsen
 */

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: ExpenseModel[];

  constructor(private router: Router, private expenseService: ExpenseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  toExpenseEdit() {
    this.router.navigate(['nieuw'], {relativeTo: this.route});
  }

}
