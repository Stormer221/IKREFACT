import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const overviewRoutes: Routes = [
  {
    path: 'overzichten',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(overviewRoutes)
  ]
})
export class OverviewModule {
}

