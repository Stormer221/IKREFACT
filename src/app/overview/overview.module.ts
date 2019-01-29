import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {SharedModule} from '../shared/shared.module';
import {InvoiceComponent} from './invoice/invoice.component';
import {InvoiceEditComponent} from './invoice/invoice-edit/invoice-edit.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';
import {InvoiceService} from './invoice/invoice.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuotationComponent} from './quotation/quotation.component';
import {QuotationEditComponent} from './quotation/quotation-edit/quotation-edit.component';
import {QuotationListComponent} from './quotation/quotation-list/quotation-list.component';
import {QuotationService} from './quotation/quotation.service';
import {ReportComponent} from './report/report.component';
import {ReportGeneratorComponent} from './report/report-generator/report-generator.component';
import {ExpenseService} from '../expense/expense.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {QuotationFilterPipe} from './quotation/quotationfilter.pipe';
import {InvoiceFilterPipe} from './invoice/invoicefilter.pipe';
import {QuotationDetailComponent} from './quotation/quotation-detail/quotation-detail.component';
import {InvoiceDetailComponent} from './invoice/invoice-detail/invoice-detail.component';


@NgModule({
  declarations: [
    OverviewComponent,
    InvoiceComponent,
    InvoiceEditComponent,
    InvoiceListComponent,
    QuotationComponent,
    QuotationEditComponent,
    QuotationListComponent,
    ReportComponent,
    ReportGeneratorComponent,
    QuotationFilterPipe,
    InvoiceFilterPipe,
    QuotationDetailComponent,
    InvoiceDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    InvoiceService,
    QuotationService,
    ExpenseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OverviewModule {
}

