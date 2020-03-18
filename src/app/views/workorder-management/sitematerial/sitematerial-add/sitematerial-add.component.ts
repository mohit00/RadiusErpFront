import { Component, OnInit } from '@angular/core';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'app/views/company-management/company.service';
import { Router } from '@angular/router';
import {WorkorderService} from '../../workorder.service'
@Component({
  selector: 'app-sitematerial-add',
  templateUrl: './sitematerial-add.component.html',
  styleUrls: ['./sitematerial-add.component.scss']
})
export class SitematerialAddComponent implements OnInit {
  rows:any =[];
  temp:any =[];
  companyList:any;
  constructor(private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private CompanyService:CompanyService,private Router:Router,private workorderService:WorkorderService) { }
  href:any;
  pageType:any='';
  departmentDetails:any;
  departmentDetail(){
    this.workorderService.siteMaterialDetail(sessionStorage.getItem("siteMaterialSelecteduuid")).subscribe(res=>{
      console.log(res)
      this.updateForm(res)
    })
  }
  ngOnInit() {
this.getCompanyList()
this.href = this.Router.url;
if (this.href == '/workorder/sitematerial/Update') {
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
        materialName: ['', [
        ]],
        companyuuid:[''],
        materialDescription:['']
      });
  }
  updateForm(data){
    
    this.firstFormGroup = this.fb.group({
      materialName: [data.name, [
      ]],
      companyuuid:[data.companyuuid],
      materialDescription:[data.materialDescription],
      sitematuuid:[data.uuid]
    });
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }

  getCompanyList(){
    this.CompanyService.companyList().subscribe(res=>{
       this.companyList = res.data.filter((data)=>{
         if(data.type.toLowerCase() =='site'){
           return true;
         }else{
          return false;

         }
       });
 
    })
  }
  createDepartment(){
    this.AppLoaderService.open();

    this.workorderService.siteMaterialCreate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['workorder/sitematerial'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  updateDepartment(){
    this.AppLoaderService.open();

    this.workorderService.siteMaterialUpdate(this.firstFormGroup.value).subscribe(res=>{
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['workorder/sitematerial'])
        });
      }
      this.AppLoaderService.close();

    })
  }
}
