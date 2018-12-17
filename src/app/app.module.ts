import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
import {ContactsModule} from "./contacts/contacts.module";
import {SharedModule} from "./shared/shared.module";
import {ExpenseModule} from "./expense/expense.module";
import {OverviewModule} from "./overview/overview.module";

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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    ExpenseModule,
    OverviewModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
