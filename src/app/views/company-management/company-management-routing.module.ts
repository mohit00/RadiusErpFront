import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component'

import { DepartmentComponent } from './department/department.component'
import { VerticalComponent } from './vertical/vertical.component'
import { UserComponent } from './user/user.component'
import {CompanyAddComponent} from './company/company-add/company-add.component';
import {DepartmentAddComponent} from './department/department-add/department-add.component';
import {VerticalAddComponent} from './vertical/vertical-add/vertical-add.component';
import {UserAddComponent} from './user/user-add/user-add.component';
const routes: Routes = [{
  path: '',
  component: CompanyComponent,
  data: { title: "Creation", breadcrumb: "Creation" } 
},{
  path: 'Vendor',
  component: CompanyComponent,
  data: { title: "Vendor", breadcrumb: "Vendor" } 
},{
  path: 'Vendor/Add',
  component: CompanyAddComponent,
  data: { title: "Vendor/Add", breadcrumb: "Vendor/Add" } 
},{
  path: 'Vendor/Update',
  component: CompanyAddComponent,
  data: { title: "Vendor/Update", breadcrumb: "Vendor/Update" } 
},{
  path: 'Client',
  component: CompanyComponent,
  data: { title: "Client", breadcrumb: "Client" } 
},{
  path: 'Client/Add',
  component: CompanyAddComponent,
  data: { title: "Client/Add", breadcrumb: "Client/Add" } 
},{
  path: 'Client/Update',
  component: CompanyAddComponent,
  data: { title: "Client/Update", breadcrumb: "Client/Update" } 
},{
  path: 'under',
  component: CompanyComponent,
  data: { title: "Creation", breadcrumb: "Creation" } 
},{
  path: 'Add',
  component: CompanyAddComponent,
  data: { title: "Add", breadcrumb: "Add" } 
},{
  path: 'under/Add',
  component: CompanyAddComponent,
  data: { title: "under/Company", breadcrumb: "under/Company" } 
},{
  path: 'Update',
  component: CompanyAddComponent,
  data: { title: "Update", breadcrumb: "Update" } 
}, {
  path: 'department',
  component: DepartmentComponent,
  data: { title: "department", breadcrumb: "Department" }

},{
  path: 'department/Add',
  component: DepartmentAddComponent,
  data: { title: "department/Add", breadcrumb: "department/Add" } 
},{
  path: 'department/Update',
  component: DepartmentAddComponent,
  data: { title: "department/Update", breadcrumb: "department/Update" } 
}, {
  path: 'vertical',
  component: VerticalComponent,
  data: { title: "vertical", breadcrumb: "Vertical" }

},{
  path: 'vertical/Add',
  component: VerticalAddComponent,
  data: { title: "vertical/Add", breadcrumb: "vertical/Add" } 
},{
  path: 'vertical/Update',
  component: VerticalAddComponent,
  data: { title: "vertical/Update", breadcrumb: "vertical/Update" } 
}, {
  path: 'user',
  component: UserComponent,
  data: { title: "user", breadcrumb: "User" }

},{
  path: 'user/Add',
  component: UserAddComponent,
  data: { title: "user/Add", breadcrumb: "User / Add" } 
},{
  path: 'user/Update',
  component: UserAddComponent,
  data: { title: "user/Update", breadcrumb: "user/Update" } 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyManagementRoutingModule { }
