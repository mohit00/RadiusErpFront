import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
 import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
 import { CompanyService } from '../../company.service';
import {departmentService} from '../../department.service'
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {
  rows:any =[];
  temp:any =[];
  companyList:any;
  constructor(private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private CompanyService:CompanyService,private Router:Router,private departmentService:departmentService) { }
  href:any;
  pageType:any='';
  departmentDetails:any;
  departmentDetail(){
    this.departmentService.departmentDetail(sessionStorage.getItem("deparmentSelecteduuid")).subscribe(res=>{
       this.departmentDetails = res.data;
        this.updateForm(res.data);
     })
  }
  ngOnInit() {
this.getCompanyList()
this.href = this.Router.url;
if (this.href == '/company/department/Update') {
  this.pageType = "Update"
  this.departmentDetail();
 } else {
  this.pageType = "Add"
}
this.createForm();
  }
  firstFormGroup: FormGroup;

  createForm(){
 
      this.firstFormGroup = this.fb.group({
        name: ['', [
        ]],
        companyuuid:[''],
        description:['']
      });
  }
  updateForm(data){
    
    this.firstFormGroup = this.fb.group({
      name: [data.name, [
      ]],
      companyuuid:[data.companyuuid],
      description:[data.description],
      deptUuid:[data.uuid]
    });
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }

  getCompanyList(){
    this.CompanyService.companyList().subscribe(res=>{
       this.companyList = res.data;
 
    })
  }
  createDepartment(){
    this.AppLoaderService.open();

    this.departmentService.departmentCreate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company/department'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  updateDepartment(){
    this.AppLoaderService.open();

    this.departmentService.departmentUpdate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company/department'])
        });
      }
      this.AppLoaderService.close();

    })
  }
}
