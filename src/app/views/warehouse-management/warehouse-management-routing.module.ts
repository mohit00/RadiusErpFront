import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseAddComponent } from './warehouse/warehouse-add/warehouse-add.component';
import { WarehouseMaterialComponent } from './warehouse-material/warehouse-material.component';
import {CompanyManageByComponent} from '../company-management/company-manage-by/company-manage-by.component'
import { CompanyManageAddComponent } from '../company-management/company-manage-by/company-manage-add/company-manage-add.component';
const routes: Routes = [{
  path:'',
  component:WarehouseComponent,
  data: { title: "List", breadcrumb: "List" }

},{
  path:'Add',
  component:WarehouseAddComponent,
  data: { title: "Add", breadcrumb: "Add" }

},{
  path:'Update',
  component:WarehouseAddComponent,
  data: { title: "Update", breadcrumb: "Update" }

}
,{
  path:'manageBy',
  component:CompanyManageByComponent,
  data: { title: "manageBy", breadcrumb: "manageBy" }

},{
  path: 'manageBy/Add',
  component: CompanyManageAddComponent,
  data: { title: "manageBy/Add", breadcrumb: "manageBy/Add" }
},{
  path: 'material',
  component: WarehouseMaterialComponent,
  data: { title: "Material", breadcrumb: "Material" }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseManagementRoutingModule { }
