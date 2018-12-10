import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactSearchBarComponent } from './contacts/contact-search-bar/contact-search-bar.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';

const appRoutes: Routes = [
  {
    path: 'start',
    component: ErrorComponent
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
    ContactsComponent,
    ContactFormComponent,
    ContactSearchBarComponent,
    ContactListComponent,
    ContactItemComponent
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
