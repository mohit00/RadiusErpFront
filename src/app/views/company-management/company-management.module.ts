import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { VerticalComponent } from './vertical/vertical.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { VerticalAddComponent } from './vertical/vertical-add/vertical-add.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
 @NgModule({
  declarations: [CompanyComponent, UserComponent, DepartmentComponent, VerticalComponent,  CompanyAddComponent, DepartmentAddComponent, VerticalAddComponent, UserAddComponent ],
  imports: [FlexLayoutModule,FormsModule, ReactiveFormsModule,
    CommonModule,NgxDatatableModule,SharedMaterialModule,
    CompanyManagementRoutingModule
  ],
  providers:[]
})
export class CompanyManagementModule { }
