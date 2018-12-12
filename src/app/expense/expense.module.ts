import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenseComponent} from "./expense.component";
import {ExpenseListComponent} from "./expense-list/expense-list.component";
import {ExpenseEditComponent} from "./expense-edit/expense-edit.component";
import {RouterModule, Routes} from "@angular/router";
import {ExpenseItemComponent} from "./expense-item/expense-item.component";

const onkostRoutes: Routes = [
  {
    path: 'onkosten',
    component: ExpenseComponent
  },
  {
    path: 'onkosten/nieuw',
    component: ExpenseEditComponent
  },
  {
    path: 'onkosten/:onkost',
    component: ExpenseEditComponent
  }
];

@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseEditComponent,
    ExpenseItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(onkostRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpenseModule {
}
