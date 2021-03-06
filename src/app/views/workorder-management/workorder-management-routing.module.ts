import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkorderComponent } from './workorder/workorder.component'
import { WorkorderAddComponent } from './workorder/workorder-add/workorder-add.component'
import { PaymentTermComponent } from './payment-term/payment-term.component';
import { PaymentTermAddComponent } from './payment-term/payment-term-add/payment-term-add.component';
import { SitematerialAddComponent } from './sitematerial/sitematerial-add/sitematerial-add.component';
import { SitematerialComponent } from './sitematerial/sitematerial.component'
import {WorkorderAppendComponent} from './workorder/workorder-append/workorder-append.component'
import {PmworkorderComponent} from './pmworkorder/pmworkorder.component'
import { ProjectWoComponent } from './project-wo/project-wo.component';
import { ProjectWoDetailComponent } from './project-wo/project-wo-detail/project-wo-detail.component';
import {WorkorderReportComponent} from './workorder-report/workorder-report.component'
ProjectWoComponent
  const routes: Routes = [
  {
    path: '',
    component: WorkorderComponent,
    data: { title: "workorder", breadcrumb: "workorder" }
  },{
    path: 'pm',
    component: PmworkorderComponent,
    data: { title: "PM/workorder", breadcrumb: "PM/workorder" }
  },{
    path: 'pmwo/detail',
    component: ProjectWoDetailComponent,
    data: { title: "PM/workorder/Detail", breadcrumb: "PM/workorder/Detail" }
  },{
    path: 'pmwo/list',
    component: ProjectWoComponent,
    data: { title: "PM/chalan/List", breadcrumb: "PM/chalan/List" }
  }, {
    path: 'Add',
    component: WorkorderAddComponent,
    data: { title: "Add", breadcrumb: "Add" }
  }, {
    path: 'Update',
    component: WorkorderAddComponent,
    data: { title: "Update", breadcrumb: "Update" }
  }, {
    path: 'Append',
    component: WorkorderAddComponent,
    data: { title: "Append", breadcrumb: "Append" }
  }, {
    path: 'Append/list',
    component: WorkorderAppendComponent,
    data: { title: "Append/List", breadcrumb: "Append/List" }
  }, {
    path: 'AppendView',
    component: WorkorderAddComponent,
    data: { title: "Append/View", breadcrumb: "Append/View" }
  },
  {
    path: 'payment',
    component: PaymentTermComponent,
    data: { title: "Payment Term", breadcrumb: "Payment Term" }
  } ,
  {
    path: 'payment/Add',
    component: PaymentTermAddComponent,
    data: { title: "payment/Add", breadcrumb: "payment/Add" }
  },
  {
    path: 'payment/Update',
    component: PaymentTermAddComponent,
    data: { title: "payment/Update", breadcrumb: "payment/Update" }
  },
  {
    path: 'sitematerial',
    component: SitematerialComponent,
    data: { title: "sitematerial", breadcrumb: "sitematerial" }
  },
  {
    path: 'sitematerial/Add',
    component: SitematerialAddComponent,
    data: { title: "sitematerial/Add", breadcrumb: "sitematerial/Add" }
  },
  {
    path: 'sitematerial/Update',
    component: SitematerialAddComponent,
    data: { title: "sitematerial/Update", breadcrumb: "sitematerial/Add" }
  },
  {
    path: 'wo/Report',
    component: WorkorderReportComponent,
    data: { title: "wo/Report", breadcrumb: "wo/Report" }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkorderManagementRoutingModule { }