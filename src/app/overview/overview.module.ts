import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class OverviewModule {
}

