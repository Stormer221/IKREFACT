import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenseComponent} from './expense.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {ExpenseEditComponent} from './expense-edit/expense-edit.component';
import {ExpenseDetailComponent} from './expense-detail/expense-detail.component';
import {SharedModule} from '../shared/shared.module';
import {ExpenseService} from './expense.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  providers: [
    ExpenseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpenseModule {
}
