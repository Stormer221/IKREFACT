import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './contacts.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {ContactSearchBarComponent} from './contact-search-bar/contact-search-bar.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactItemComponent} from './contact-list/contact-item/contact-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactEditComponent,
    ContactSearchBarComponent,
    ContactListComponent,
    // ContactItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ContactsModule {
}
