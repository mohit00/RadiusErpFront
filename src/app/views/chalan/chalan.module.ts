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

@NgModule({
  declarations: [ChalanComponent,ChalanAddComponent, ChalanpmComponent, ChalanoutComponent, ChalanpmAddComponent, ChalanoutAddComponent, ChalanOutReportComponent],
  imports: [
    CommonModule,
    ChalanRoutingModule,SharedMaterialModule,NgxDatatableModule,FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ChalanModule { }
