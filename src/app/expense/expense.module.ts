import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenseComponent} from './expense.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {ExpenseEditComponent} from './expense-edit/expense-edit.component';
import {ExpenseDetailComponent} from './expense-detail/expense-detail.component';
import {SharedModule} from '../shared/shared.module';
import {ExpenseService} from './expense.service';
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseEditComponent,
    ExpenseDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    ExpenseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpenseModule {
}
