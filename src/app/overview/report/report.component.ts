import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../expense/expense.service";
import {ActivatedRoute, Params} from "@angular/router";
import {ExpenseModel} from "../../expense/expense.model";

/**
 * The Report Component.
 *
 * @author Sergi Philipsen.
 */

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public expenses: ExpenseModel[];
  public total: number = 0;
  public startDate: Date;
  public endDate: Date;
  public costItem: string;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.startDate = params['startDate'];
        this.endDate = params['endDate'];
        this.costItem = params['costItem'];
      }
    );
    this.expenseService.getExpense()
      .subscribe(result => {
        this.expenses = result.filter(expense =>
          (expense.date >= this.startDate && expense.date <= this.endDate && expense.costItem == this.costItem) ? 1 : 0)
          .sort((a, b) => (a['date'] < b['date']) ? 1 : ((b['date'] < a['date']) ? -1 : 0));
        this.expenses.forEach((expense: ExpenseModel) => this.total += expense.amount);
      });
  }
}
