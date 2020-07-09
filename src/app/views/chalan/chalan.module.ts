import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChalanRoutingModule } from './chalan-routing.module';
import {ChalanComponent} from './chalan/chalan.component'
import {ChalanAddComponent} from './chalan/chalan-add/chalan-add.component'
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChalanpmComponent } from './chalanpm/chalanpm.component';
import { ChalanoutComponent } from './chalanout/chalanout.component';
import { ChalanpmAddComponent } from './chalanpm/chalanpm-add/chalanpm-add.component';
import { ChalanoutAddComponent } from './chalanout/chalanout-add/chalanout-add.component';
import { ChalanOutReportComponent } from './chalan-out-report/chalan-out-report.component';
import { ChalanApproveComponent } from './chalan-approve/chalan-approve.component';
import { ChalanApproveDetailComponent } from './chalan-approve/chalan-approve-detail/chalan-approve-detail.component';
import { ChalanInReportComponent } from './chalan-in-report/chalan-in-report.component';

@NgModule({
  declarations: [ChalanComponent,ChalanAddComponent, ChalanpmComponent, ChalanoutComponent, ChalanpmAddComponent, ChalanoutAddComponent, ChalanOutReportComponent, ChalanApproveComponent, ChalanApproveDetailComponent, ChalanInReportComponent],
  imports: [
    CommonModule,
    ChalanRoutingModule,SharedMaterialModule,NgxDatatableModule,FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ChalanModule { }
