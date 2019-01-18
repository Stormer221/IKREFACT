import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {SharedModule} from '../shared/shared.module';
import {InvoiceComponent} from './invoice/invoice.component';
import {InvoiceEditComponent} from './invoice/invoice-edit/invoice-edit.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';
import {InvoiceService} from './invoice/invoice.service';
import { QuotationComponent } from './quotation/quotation.component';
import { QuotationEditComponent } from './quotation/quotation-edit/quotation-edit.component';


@NgModule({
  declarations: [OverviewComponent, InvoiceComponent, InvoiceEditComponent, InvoiceListComponent, QuotationComponent, QuotationEditComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [InvoiceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OverviewModule {
}

