import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkorderManagementRoutingModule } from './workorder-management-routing.module';
import { WorkorderComponent } from './workorder/workorder.component';
import { WorkorderAddComponent } from './workorder/workorder-add/workorder-add.component';
import { PaymentTermComponent } from './payment-term/payment-term.component';
import { SitematerialComponent } from './sitematerial/sitematerial.component';
import { PaymentTermAddComponent } from './payment-term/payment-term-add/payment-term-add.component';
import { SitematerialAddComponent } from './sitematerial/sitematerial-add/sitematerial-add.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkorderAppendComponent } from './workorder/workorder-append/workorder-append.component';

@NgModule({
  declarations: [WorkorderComponent, WorkorderAddComponent, PaymentTermComponent, SitematerialComponent, PaymentTermAddComponent, SitematerialAddComponent, WorkorderAppendComponent],
  imports: [SharedMaterialModule,NgxDatatableModule,FlexLayoutModule,FormsModule, ReactiveFormsModule,
    CommonModule,
    WorkorderManagementRoutingModule
  ]
})
export class WorkorderManagementModule { }
