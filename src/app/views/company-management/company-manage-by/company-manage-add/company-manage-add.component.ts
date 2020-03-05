import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
 import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
 import { CompanyService } from '../../company.service';
@Component({
  selector: 'app-company-manage-add',
  templateUrl: './company-manage-add.component.html',
  styleUrls: ['./company-manage-add.component.scss']
})
export class CompanyManageAddComponent implements OnInit {
  rows:any =[];
  temp:any =[];
  companyList:any;
  constructor(private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private CompanyService:CompanyService,private Router:Router) { }
  href:any;
  pageType:any='';
  departmentDetails:any;
  // departmentDetail(){
  //   // this.departmentService.departmentDetail(sessionStorage.getItem("deparmentSelecteduuid")).subscribe(res=>{
  //   //    this.departmentDetails = res.data;
  //   //     this.updateForm(res.data);
  //   //  })
  // }
  ngOnInit() {
this.getCompanyList()
 this.pageType = "Add"

this.createForm();
  }
  firstFormGroup: FormGroup;

  createForm(){
 
      this.firstFormGroup = this.fb.group({
        
        manageByuuid:[''],
       });
  }
  updateForm(data){
    
    this.firstFormGroup = this.fb.group({
      
      companyuuid:[data.companyuuid] 
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

    this.CompanyService.companyManageBy(sessionStorage.getItem('companymanagebyuuid'),this.firstFormGroup.value.manageByuuid).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company/manageBy'])
        });
      }
      this.AppLoaderService.close();

    })
  }
 
}
