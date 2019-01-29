import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenseComponent} from './expense.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {ExpenseEditComponent} from './expense-edit/expense-edit.component';
import {ExpenseDetailComponent} from './expense-detail/expense-detail.component';
import {SharedModule} from '../shared/shared.module';
import {ExpenseService} from './expense.service';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {ExpenseListItemComponent} from './expense-list/expense-list-item/expense-list-item.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseListItemComponent,
    ExpenseEditComponent,
    ExpenseDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [
    ExpenseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpenseModule {
}
