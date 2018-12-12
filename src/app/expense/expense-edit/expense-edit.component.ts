import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toExpense() {
    this.router.navigate(['/onkosten']);
  }
}
