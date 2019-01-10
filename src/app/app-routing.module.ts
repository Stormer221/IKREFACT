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

const appRoutes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
  {path: 'contacten', component: ContactsComponent, children: [
      { path: ':id', component: ContactDetailComponent}
    ]},
  {path: 'onkosten', component: ExpenseComponent, children: [
      {path: 'onkosten/nieuw', component: ExpenseEditComponent},
      // {path: 'onkosten/:onkost', component: ExpenseEditComponent},
    ]},
  {path: 'overzichten', component: OverviewComponent},
  {path: 'not-found', component: ErrorComponent },
  {path: '**', redirectTo: '/not-found' },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
