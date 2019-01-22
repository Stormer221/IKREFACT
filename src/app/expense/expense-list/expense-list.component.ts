import {Component, OnInit} from '@angular/core';
import {ExpenseModel} from '../expense.model';
import {ExpenseService} from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  private expenses: ExpenseModel[];
  private page = 1;
  private sort: string;
  private desc: boolean;

  constructor(private expenseService: ExpenseService) {
  }

  sortBy(field: string) {
    if (field === this.sort && !this.desc) {
      this.desc = true;
      this.expenses = this.expenses.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    } else {
      this.sort = field;
      this.desc = false;
      this.expenses = this.expenses.sort((a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
    }
  }

  ngOnInit() {
    this.expenseService.getExpense().subscribe(result => this.expenses = result);
  }
}
