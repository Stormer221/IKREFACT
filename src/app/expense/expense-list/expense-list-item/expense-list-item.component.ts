import {Component, Input, OnInit} from '@angular/core';
import {ExpenseModel} from '../../expense.model';
import {Router} from '@angular/router';

@Component({
  selector: '[app-expense-list-item]',
  templateUrl: './expense-list-item.component.html',
  styleUrls: ['./expense-list-item.component.css']
})
export class ExpenseListItemComponent implements OnInit {
  @Input() expense: ExpenseModel;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
