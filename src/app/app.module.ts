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
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactListItemComponent } from './contacts/contact-list/contact-list-item/contact-list-item.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ExpenseModule,
    OverviewModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
