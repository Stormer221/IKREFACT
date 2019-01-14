import { Component, OnInit } from '@angular/core';
import {Contact} from '../../contacts/contact.model';
import {ExpenseService} from '../expense.service';
import {Expense} from '../expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[];

  constructor(private expenseService: ExpenseService) {}



  ngOnInit() {
    this.expenseService.getReq()
      .subscribe((expense: Expense[]) => this.expenses = expense);
    this.expenseService.getReq().subscribe(result => console.log(result));
    // this.getContact();

  }

}
