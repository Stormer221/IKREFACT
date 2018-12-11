import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toExpense() {
    this.router.navigate(['/onkosten']);
  }
}
