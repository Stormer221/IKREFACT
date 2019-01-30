import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExpenseModel} from '../expense.model';
import {ExpenseService} from '../expense.service';
import {CostItemModel} from '../costItem.model';

/***
 * The ExpenseEditComponent.
 *
 * This Component will edit and save new or existing Expenses.
 *
 * @author Sergi Philipsen.
 */

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  public model: ExpenseModel = new ExpenseModel();
  public id: number = null;
  public costItems: CostItemModel[];

  constructor(
    private router: Router,
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.id) {
          this.expenseService.getExpenseById(this.id)
            .subscribe(result => this.model = result);
        }
      }
    );
    this.expenseService.getCostItem().subscribe(result => this.costItems = result);
  }

  submitExpense() {
    if (this.costItems.some(costItem => costItem.itemType === this.model.costItem)) {
      if (this.id) {
        this.expenseService.putExpense(this.model).subscribe();
        this.router.navigate(['/onkosten/' + this.id]);
      } else {
        this.expenseService.addExpense(this.model).subscribe();
        this.router.navigate(['/onkosten']);
      }
    } else if (confirm(`De kostenpost \"${this.model.costItem}\" bestaat niet, wilt u deze toevoegen?`)) {
      let costItem = new CostItemModel(this.model.costItem.toLowerCase());
      this.expenseService.addCostItem(costItem).subscribe();
      this.costItems.push(costItem);
    }
  }

  onCancel() {
    if (this.id) {
      this.router.navigate(['/onkosten/' + this.id]);
    } else {
      this.router.navigate(['/onkosten']);
    }
  }
}
