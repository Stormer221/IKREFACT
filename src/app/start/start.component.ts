import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../expense/expense.service';
import {ExpenseModel} from '../expense/expense.model';
import {InvoiceService} from '../overview/invoice/invoice.service';
import {InvoiceModel} from '../overview/invoice/invoice.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public totalExpense = 0;
  public totalIncome = 0;
  public invoices: InvoiceModel[];


  constructor(private expeseService: ExpenseService, private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.expeseService.getExpense().subscribe(result => {
      result.forEach((expense: ExpenseModel) => this.totalExpense += expense.amount);
    });
    this.invoiceService.getInvoices().subscribe(result => {
      this.invoices = result.filter((invoice: InvoiceModel) => invoice.paid ? 0 : 1);
      this.invoices.forEach((invoice: InvoiceModel) => this.totalIncome += invoice.price);
    });
  }
}
