import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
import {SharedModule} from './shared/shared.module';
import {ExpenseModule} from './expense/expense.module';
import {OverviewModule} from './overview/overview.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {AppRoutingModule} from './app-routing.module';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {ContactListItemComponent} from './contacts/contact-list/contact-list-item/contact-list-item.component';
import {ContactListComponent} from './contacts/contact-list/contact-list.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ExpenseComponent} from './expense/expense.component';
import {ExpenseListComponent} from './expense/expense-list/expense-list.component';
import {ExpenseEditComponent} from './expense/expense-edit/expense-edit.component';
import {ExpenseDetailComponent} from './expense/expense-detail/expense-detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    StartComponent,
    ContactsComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailComponent,
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseEditComponent,
    ExpenseDetailComponent,

    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ExpenseModule,
    OverviewModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
