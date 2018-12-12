import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactFormComponent} from './contacts/contact-form/contact-form.component';
import {ExpenseComponent} from './expense/expense.component';
import {ExpenseListComponent} from './expense/expense-list/expense-list.component';
import {ExpenseFormComponent} from './expense/expense-form/expense-form.component';
import {ContactsModule} from "./contacts/contacts.module";
import {SharedModule} from "./shared/shared.module";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'contacten',
    component: ContactsComponent
  },
  {
    path: 'contacten/form',
    component: ContactFormComponent
  },
  {
    path: 'onkosten',
    component: ExpenseComponent
  },
  {
    path: 'onkosten-form',
    component: ExpenseFormComponent
  },
  {
    path: ':code',
    component: ErrorComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    StartComponent,
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseFormComponent,
    StartComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
