import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExpenseService} from '../expense.service';
import {Expense} from '../expense';

@Component({
  selector: 'app-expenseitem',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  private id: number;
  private expense: Expense;

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

}
