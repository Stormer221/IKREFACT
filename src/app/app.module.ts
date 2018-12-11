import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {CardComponent} from './card/card.component';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactSearchBarComponent } from './contacts/contact-search-bar/contact-search-bar.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';

const appRoutes: Routes = [
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
    path: 'contact-form',
    component: ContactFormComponent
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
    CardComponent,
    LoginComponent,
    StartComponent,
    ErrorComponent,
    ContactsComponent,
    ContactFormComponent,
    ContactSearchBarComponent,
    ContactListComponent,
    ContactItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
