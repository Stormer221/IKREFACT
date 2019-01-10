import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {SharedModule} from '../shared/shared.module';
import {InvoiceComponent} from './invoice/invoice.component';
import {InvoiceEditComponent} from './invoice/invoice-edit/invoice-edit.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';


@NgModule({
  declarations: [OverviewComponent, InvoiceComponent, InvoiceEditComponent, InvoiceListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OverviewModule {
}

