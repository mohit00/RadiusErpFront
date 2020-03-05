import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
 import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
import {materialService} from '../material.serivce'
import {CompanyService} from '../../company-management/company.service';
@Component({
  selector: 'app-vendormaterial',
  templateUrl: './vendormaterial.component.html',
  styleUrls: ['./vendormaterial.component.scss']
})
export class VendormaterialComponent implements OnInit {
  rows:any =[];
  temp:any =[];
 
   constructor(private CompanyService:CompanyService,private materialService:materialService,private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private Router:Router) { }
  href:any;

  pageType:any='Add';
  departmentDetails:any;
  companyList:any;
  materialLsit;any;
  materialList(){
    this.materialService.materialList().subscribe(res=>{
     this.materialLsit =  res.data;
    })
  }
  vendorMaterialDetail(data){
      this.pageType = 'Update'
      
       this.firstFormGroup = this.fb.group({
        vendorCost:[data.vendorCost],

        materialuuid:[data.uuid],
        verdoruuid:[this.firstFormGroup.value.verdoruuid],
        companyuuid:[data.underCompany]

      });
      this.getCompanyMaterial();
  }
  vendorMaterialList;
  getVendorMaterial( ){
    this.materialService.getVendormaterial(this.firstFormGroup.value.verdoruuid).subscribe(res=>{
       
   this.rows= this.temp= res.data;
     })
  }
  departmentDetail(){
      this.CompanyService.companyList().subscribe(res=>{
        this.companyList = res.data.filter((data)=>{
          if(data.type == 'Vendor' || data.type == 'All' ){
            return true;
          }else{
            return false;

          }
        });
      })
  }
  ngOnInit() {
   this.departmentDetail();
   this.materialList();
 
this.createForm();
  }
  handleFileInput(files: any, type) { 
    this.materialPic = files
      //  for(var i=0;i<files.length;i++){
      //   this.materialPic.push(files[i])
       
      // } 
  }
  backToAdd(){
    this.pageType = 'Add'
    this.createForm();
    this.rows =this.temp = [];

  }
  tet:any;
  remove(index, type) {
    this.materialPic.splice(index, 1);
 
    
  }
  view(bill) {
    //  console.log(bill)
    if(bill.size){
     const reader = new FileReader();
     reader.readAsDataURL(bill);
     reader.onload =  ()=> {
       console.log(reader.result);
       this.tet = reader.result;
       console.log(this.tet)
       var win = window.open();
       win.document.write('<iframe src="' + this.tet  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
     };
    }else{
     window.open(environment.LOCAL_BASE+"/images/"+bill.name);
    }
 }
  fd: FormData;
  firstFormGroup: FormGroup;
  materialPic:any = [];
  createForm(){
   
      this.firstFormGroup = this.fb.group({
        vendorCost:[0],

        materialuuid:[''],
        verdoruuid:[''],
        companyuuid:['']

      });
  }
  getCompanyMaterial(){
    this.materialService.getCompanymaterial(this.firstFormGroup.value.companyuuid).subscribe(res=>{
      this.materialLsit =  res.data;

    })
  }
  getCompanyList(){
    
    this.CompanyService.companyList().subscribe(res=>{
      this.companyList =     res.data.filter(res=>{
        if(res.type !='Client'){
          return true
        }else{
          return false;
        }
      });
        })
  }
  updateForm(data){
 
   
    this.firstFormGroup = this.fb.group({
      materialName: [data.name, [
      ]],
       description:[data.description],
       materialDimenstion:[data.materialDimenstion],
       companyCost:[data.companyCost],
       uuid:[data.uuid]


    });
    this.materialPic.push({name:data.materialPic.split('/')[data.materialPic.split('/').length -1]})
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }

 
  addMaterial(){
    this.AppLoaderService.open(); 
     this.materialService.materialVendroRelation(this.firstFormGroup.value).subscribe(res=>{
      this.AppLoaderService.close();
      let dataJson = {
        title:'Success',
        message:res.message
      }
      this.getVendorMaterial();
     this.dialog.confirm(dataJson);
    })
  }
  updateMaterial(){
    this.AppLoaderService.open(); 
      this.materialService.materialVendroRelationUpdate(this.firstFormGroup.value).subscribe(res=>{
      this.AppLoaderService.close();
      let dataJson = {
        title:'Success',
        message:res.message
      }
      this.getVendorMaterial();
     this.dialog.confirm(dataJson);
    })
  
 
  }
}
