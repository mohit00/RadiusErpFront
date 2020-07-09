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
import { verticalService} from '../../vertical.service'
@Component({
  selector: 'app-vertical-add',
  templateUrl: './vertical-add.component.html',
  styleUrls: ['./vertical-add.component.scss']
})
export class VerticalAddComponent implements OnInit {
  rows:any =[];
  temp:any =[];
  companyList:any;
  constructor(private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private CompanyService:CompanyService,private Router:Router,private departmentService:departmentService ,private verticalService:verticalService) { }
  href:any;
  pageType:any='';
  departmentDetails:any;
  departmentDetail(){
    this.verticalService.verticalDetail(sessionStorage.getItem("verticalSelecteduuid")).subscribe(res=>{
       this.departmentDetails = res.data;
        this.updateForm(res.data);
     })
  }
  userdata:any;
  ngOnInit() {
    this.createForm();

    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    if(this.userdata.role == 'Admin'){

this.getCompanyList()
    }else{
          this.getDepartmentList();

    }
this.href = this.Router.url;
if (this.href == '/company/vertical/Update') {
  this.pageType = "Update"
  this.departmentDetail();
 } else {
  this.pageType = "Add"
}
  }
  firstFormGroup: FormGroup;

  createForm(){
 
      this.firstFormGroup = this.fb.group({
        name: ['', [
        ]],
        companyuuid:[''],
        description:[''],
        department:[]

      });
  }
  updateForm(data){
    this.firstFormGroup = this.fb.group({
      name: [data.name, [
      ]],
      companyuuid:[data.companyuuid],
      description:[data.description],
      deptUuid:[data.uuid], 
      department:[data.department] 
    });
    this.getDepartmentList();

  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }

  getCompanyList(){
    this.CompanyService.companyList().subscribe(res=>{
       this.companyList = res.data.filter(res=>{
        if(res.type =='All'){
          return true;
        }else{
          return false;
        }
      }); 
    })
  }
  departmentList:any;
  getDepartmentList(){
    this.departmentService.departmentList(this.firstFormGroup.value.companyuuid).subscribe(res=>{
       this.departmentList = res.data;
 
    })
  }
  
  createDepartment(){
    this.AppLoaderService.open(); 
    this.verticalService.verticalCreate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company/vertical'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  updateDepartment(){
    this.AppLoaderService.open();

    this.verticalService.verticalUpdate(this.firstFormGroup.value).subscribe(res=>{
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
