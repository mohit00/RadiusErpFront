import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { MaterialAddComponent } from './material/material-add/material-add.component';
import {VendormaterialComponent} from './vendormaterial/vendormaterial.component'
const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    data: { title: "Creation", breadcrumb: "Creation" }
  }, {
    path: 'Add',
    component: MaterialAddComponent,
    data: { title: "Add", breadcrumb: "Add" }
  }, {
    path: 'Update',
    component: MaterialAddComponent,
    data: { title: "Update", breadcrumb: "Update" }
  },{
    path:'Vendor',
    component:VendormaterialComponent,
    data: {title:'Vendor', breadcrumb: "Vendor"}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialManagementRoutingModule { }
