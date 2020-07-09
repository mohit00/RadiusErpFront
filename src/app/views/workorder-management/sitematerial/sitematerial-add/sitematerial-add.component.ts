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
       this.updateForm(res)
    })
  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));

this.href = this.Router.url;
this.createForm();

if (this.href == '/workorder/sitematerial/Update') {
  this.pageType = "Update"
  this.departmentDetail();
  
 } else {
  this.pageType = "Add"
}
this.getCompanyList()

  }
  firstFormGroup: FormGroup;

  createForm(){
 
      this.firstFormGroup = this.fb.group({
        materialName: ['', [
        ]],
        groupuuid:[''],
        isGroup:[true],
        companyuuid:[''],
        materialDescription:['']
      });
  }
  isgroup(){
    // alert(this.firstFormGroup.value.isGroup);
      if(this.firstFormGroup.value.isGroup){
      
      }else{
          this.getCompanyList();
      }
  }
  updateForm(data){ 
     this.firstFormGroup = this.fb.group({
      materialName: [data.name, [
      ]],
      companyuuid:[data.companyuuid], 
      groupuuid:[data.groupuuid],
      isGroup:[data.isGroup],
      materialDescription:[data.materialDescription],
      sitematuuid:[data.uuid]
    });
     this.companyUnderList();
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  } 
  getCompanyList(){
    
    if(this.userdata.role =='Admin'){
      this.CompanyService.companyList().subscribe(res=>{
        this.companyList = res.data.filter((data)=>{
          if(data.type.toLowerCase() =='site'){
            return true;
          }else{
           return false;
 
          }
        });
  
     })
    }else{
       if(this.firstFormGroup.value.isGroup){
        this.CompanyService.companyList().subscribe(res=>{
          this.companyList = res.data.filter((data)=>{
            if(data.type.toLowerCase() =='group'){
              return true;
            }else{
             return false;
   
            }
          });
    
       })
       this.CompanyService.companyUnderList(this.firstFormGroup.value.groupuuid).subscribe(res=>{
        this.companygLists = res.data.filter((data)=>{
         if(data.type.toLowerCase() != 'vendor'){
           return true
         }else{
           return false;
         }
       }); 
        })
      }else{
        this.CompanyService.companyList().subscribe(res=>{
          this.companygLists = res.data.filter((data)=>{
            if(data.type.toLowerCase() =='site'){
              return true;
            }else{
             return false;
   
            }
          });
    
       })
      }
   
 
    }
   
  }
  companygLists:any;
  companyUnderList(){
    if (this.href == '/workorder/sitematerial/Update') {
      if(this.userdata.role =='Admin'){
        this.CompanyService.companyUnderList(this.firstFormGroup.value.groupuuid).subscribe(res=>{
          this.companygLists = res.data.filter((data)=>{
           if(data.type.toLowerCase() != 'vendor'){
             return true
           }else{
             return false;
           }
         }); 
          })
      }else{
        this.getCompanyList();
      }
    }else{
      this.CompanyService.companyUnderList(this.firstFormGroup.value.groupuuid).subscribe(res=>{
        this.companygLists = res.data.filter((data)=>{
         if(data.type.toLowerCase() != 'vendor'){
           return true
         }else{
           return false;
         }
       }); 
        })
    }
  
 
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
