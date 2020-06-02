import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
 import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
 import { CompanyService } from '../../../company-management/company.service';
import {warehouseService} from '../../warehouse.service'
@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.scss']
})
export class WarehouseAddComponent implements OnInit {
  rows:any =[];
  temp:any =[];
  companyList:any;
  constructor(private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private CompanyService:CompanyService,private Router:Router,private warehouseService:warehouseService) { }
  href:any;
  pageType:any='';
  departmentDetails:any;
  departmentDetail(){
    this.warehouseService.warehouseDetail(sessionStorage.getItem("warehouseSelecteduuid")).subscribe(res=>{
       
       this.departmentDetails = res;
        this.updateForm(res);
     })
  }
  ngOnInit() {
this.getCompanyList()
 this.href = this.Router.url;
if (this.href == '/warehouse/Update') {
  this.pageType = "Update"
  this.departmentDetail();
 } else {
  this.pageType = "Add"
}
   // this.departmentDetail();
  
this.createForm();
  }
  firstFormGroup: FormGroup;

  createForm(){
 
      this.firstFormGroup = this.fb.group({
        name: ['', [
        ]],
        Address:[''],
        GST:[''],
        company:[''],
        isPrimary:[false]
      });
  }
  updateForm(data){
    
    this.firstFormGroup = this.fb.group({
      name: [data.name, [
      ]],
      Address:[data.address],
      GST:[data.gst],
      company:[data.companyuuid],
      uuid:[data.uuid],
      isPrimary:[data.isPrimary]

    });
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }

  getCompanyList(){
    this.CompanyService.companyList().subscribe(res=>{
       this.companyList = res.data.filter(res=>{
         if(res.type == 'All'){
           return true;
         }else {
           return false;
         }
       });
 
    })
  }
  createDepartment(){
    this.AppLoaderService.open();

    this.warehouseService.warehouseCreate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['warehouse'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  updateDepartment(){
    this.AppLoaderService.open();

    this.warehouseService.warehouseUpdate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['warehouse'])
        });
      }
      this.AppLoaderService.close();

    })
  }
}
