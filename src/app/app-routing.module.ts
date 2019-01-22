import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {NgModule} from '@angular/core';
import {ContactsComponent} from './contacts/contacts.component';
import {ExpenseComponent} from './expense/expense.component';
import {ExpenseEditComponent} from './expense/expense-edit/expense-edit.component';
import {OverviewComponent} from './overview/overview.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {InvoiceEditComponent} from './overview/invoice/invoice-edit/invoice-edit.component';
import {ExpenseDetailComponent} from './expense/expense-detail/expense-detail.component';
import {InvoiceListComponent} from './overview/invoice/invoice-list/invoice-list.component';
import {QuotationEditComponent} from './overview/quotation/quotation-edit/quotation-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
  {path: 'contacten', component: ContactsComponent},
  {path: 'contacten/nieuw', component: ContactEditComponent},
  {path: 'contacten/:contactID', component: ContactDetailComponent},
  {path: 'contacten/:contactID/wijzigen', component: ContactEditComponent},
  // {path: '/offerte', component: QuotationComponent},
  {path: 'contacten/:contactID/factuur', component: InvoiceEditComponent},
  {path: 'onkosten', component: ExpenseComponent},
  {path: 'onkosten/nieuw', component: ExpenseEditComponent},
  {path: 'onkosten/:id', component: ExpenseDetailComponent},
  {path: 'onkosten/:id/wijzigen', component: ExpenseEditComponent},
  {path: 'overzichten', component: OverviewComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: '/not-found'},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
