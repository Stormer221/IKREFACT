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

const appRoutes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
  {path: 'contacten', component: ContactsComponent, children: [
      { path: 'nieuw', component: ContactEditComponent},
      { path: ':contactID', component: ContactDetailComponent},
      { path: ':contactID/wijzigen', component: ContactEditComponent}
      // {path: '/offerte', component: QuotationComponent},
      // {path: '/invoice', component: InvoiceComponent},
    ]},
  {path: 'onkosten', component: ExpenseComponent, children: [
      {path: 'nieuw', component: ExpenseEditComponent},
    ]},

      // TODO queryparams erbij zetten
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
