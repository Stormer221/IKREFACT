import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {SharedModule} from '../shared/shared.module';
import {InvoiceComponent} from './invoice/invoice.component';
import {InvoiceEditComponent} from './invoice/invoice-edit/invoice-edit.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';
import {InvoiceService} from './invoice/invoice.service';
import {FormsModule} from '@angular/forms';
import {QuotationComponent} from './quotation/quotation.component';
import {QuotationEditComponent} from './quotation/quotation-edit/quotation-edit.component';
import {QuotationListComponent} from './quotation/quotation-list/quotation-list.component';
import {QuotationService} from './quotation/quotation.service';


@NgModule({
  declarations: [OverviewComponent, InvoiceComponent, InvoiceEditComponent, InvoiceListComponent, QuotationComponent,
    QuotationEditComponent, QuotationListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [InvoiceService, QuotationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OverviewModule {
}

