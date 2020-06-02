import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseManagementRoutingModule } from './warehouse-management-routing.module';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseAddComponent } from './warehouse/warehouse-add/warehouse-add.component';
import { WarehouseMaterialComponent } from './warehouse-material/warehouse-material.component';
import {CompanyManageByComponent} from '../company-management/company-manage-by/company-manage-by.component'
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { CompanyManageAddComponent } from '../company-management/company-manage-by/company-manage-add/company-manage-add.component';
 
@NgModule({
  declarations: [CompanyManageAddComponent,CompanyManageByComponent, WarehouseComponent, WarehouseAddComponent, WarehouseMaterialComponent ],
  imports: [SharedMaterialModule,NgxDatatableModule,FlexLayoutModule,FormsModule, ReactiveFormsModule,FileUploadModule,
    CommonModule,
    WarehouseManagementRoutingModule
  ]
})
export class WarehouseManagementModule { }
