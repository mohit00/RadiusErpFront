import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialManagementRoutingModule } from './material-management-routing.module';
import { MaterialComponent } from './material/material.component';
import { MaterialAddComponent } from './material/material-add/material-add.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { VendormaterialComponent } from './vendormaterial/vendormaterial.component';

@NgModule({
  declarations: [MaterialComponent, MaterialAddComponent, VendormaterialComponent],
  imports: [SharedMaterialModule,NgxDatatableModule,FlexLayoutModule,FormsModule, ReactiveFormsModule,
    CommonModule,FileUploadModule,
    MaterialManagementRoutingModule
  ]
})
export class MaterialManagementModule { }
