import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
import {ContactsModule} from './contacts/contacts.module';
import {SharedModule} from './shared/shared.module';
import {ExpenseModule} from './expense/expense.module';
import {OverviewModule} from './overview/overview.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    StartComponent,
    ErrorComponent,
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
