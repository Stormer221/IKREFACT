import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from "./contacts.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactSearchBarComponent} from "./contact-search-bar/contact-search-bar.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactItemComponent} from "./contact-list/contact-item/contact-item.component";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactFormComponent,
    ContactSearchBarComponent,
    ContactListComponent,
    ContactItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactsModule {
}
