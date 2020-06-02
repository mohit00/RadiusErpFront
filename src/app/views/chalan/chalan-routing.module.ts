import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChalanComponent} from './chalan/chalan.component'
import {ChalanAddComponent} from './chalan/chalan-add/chalan-add.component'
import {ChalanpmComponent} from './chalanpm/chalanpm.component'
import {ChalanoutComponent} from './chalanout/chalanout.component'
import { ChalanpmAddComponent } from './chalanpm/chalanpm-add/chalanpm-add.component';
import { ChalanoutAddComponent } from './chalanout/chalanout-add/chalanout-add.component';
import {ChalanOutReportComponent} from './chalan-out-report/chalan-out-report.component'
const routes: Routes = [{
  path:'in',
  component:ChalanComponent
},{
  path:'report/chalan/out',
  component:ChalanOutReportComponent
},{
  path:'in/Add',
  component:ChalanAddComponent
},{
  path:'in/Update',
  component:ChalanAddComponent
},{
  path:'out',
  component:ChalanoutComponent,
  data: { title: 'out', breadcrumb: 'out'}

},{
  path:'out/Add',
  component:ChalanoutAddComponent,
  data: { title: 'out/Add', breadcrumb: 'out/Add'}

},{
  path:'out/Update',
  component:ChalanoutAddComponent,
  data: { title: 'out/Update', breadcrumb: 'out/Update'}

},{
  path:'po',
  component:ChalanpmComponent,
  data: { title: 'po', breadcrumb: 'po'}

},{
  path:'po/Add',
  component:ChalanpmAddComponent,
  data: { title: 'po/Add', breadcrumb: 'po/Add'}

},{
  path:'po/Update',
  component:ChalanpmAddComponent,
  data: { title: 'po/Update', breadcrumb: 'po/Update'}

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChalanRoutingModule { }
