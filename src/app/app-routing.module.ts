import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {NgModule} from '@angular/core';
import {ContactsComponent} from './contacts/contacts.component';
import {ExpenseComponent} from './expense/expense.component';
import {ExpenseEditComponent} from './expense/expense-edit/expense-edit.component';
import {OverviewComponent} from './overview/overview.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {InvoiceEditComponent} from './overview/invoice/invoice-edit/invoice-edit.component';
import {ExpenseDetailComponent} from './expense/expense-detail/expense-detail.component';
import {ReportComponent} from './overview/report/report.component';
import {QuotationEditComponent} from './overview/quotation/quotation-edit/quotation-edit.component';
import {AuthGuardService} from './auth-guard.service';
import {QuotationDetailComponent} from "./overview/quotation/quotation-detail/quotation-detail.component";
import {InvoiceDetailComponent} from "./overview/invoice/invoice-detail/invoice-detail.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent, canActivate: [AuthGuardService]},
  {path: 'contacten', component: ContactsComponent, canActivate: [AuthGuardService]},
  {path: 'contacten/nieuw', component: ContactEditComponent, canActivate: [AuthGuardService]},
  {path: 'contacten/:contactID', component: ContactDetailComponent, canActivate: [AuthGuardService]},
  {path: 'contacten/:contactID/wijzigen', component: ContactEditComponent, canActivate: [AuthGuardService]},
  {path: 'contacten/:contactID/offerte', component: QuotationEditComponent, canActivate: [AuthGuardService]},
  {path: 'contacten/:contactID/factuur', component: InvoiceEditComponent, canActivate: [AuthGuardService]},
  {path: 'onkosten', component: ExpenseComponent, canActivate: [AuthGuardService]},
  {path: 'onkosten/nieuw', component: ExpenseEditComponent, canActivate: [AuthGuardService]},
  {path: 'onkosten/:id', component: ExpenseDetailComponent, canActivate: [AuthGuardService]},
  {path: 'onkosten/:id/wijzigen', component: ExpenseEditComponent, canActivate: [AuthGuardService]},
  {path: 'overzichten', component: OverviewComponent, canActivate: [AuthGuardService]},
  {path: 'rapport/:startDate/:endDate/:costItem', component: ReportComponent, canActivate: [AuthGuardService]},
  {path: 'overzichten/offerte/:quotationID', component: QuotationDetailComponent, canActivate: [AuthGuardService]},
  {path: 'overzichten/factuur/:invoiceID', component: InvoiceDetailComponent, canActivate: [AuthGuardService]},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: '/not-found'},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
