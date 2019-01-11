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
    this.getExpense();
  }

  getExpense(): void {
    this.expenseService.getExpense()
      .subscribe(result => console.log(result));
  }


  toExpenseEdit() {
    this.router.navigate(['nieuw'], {relativeTo: this.route});
  }

}
