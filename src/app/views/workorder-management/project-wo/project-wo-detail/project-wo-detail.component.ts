import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from 'app/views/company-management/company.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service'; 
import {verticalService} from '../../../company-management/vertical.service'
import { departmentService} from '../../../company-management/department.service'
import {WorkorderService} from '../../workorder.service'
import { warehouseService } from 'app/views/warehouse-management/warehouse.service';
@Component({
  selector: 'app-project-wo-detail',
  templateUrl: './project-wo-detail.component.html',
  styleUrls: ['./project-wo-detail.component.scss']
})
export class ProjectWoDetailComponent implements OnInit {
  pageType: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: any
  stateList: any;
  cityList: any;
  href: any;
  companySiteLists: any;
  verticalList: any;
  departmentList: any;
  paymentList: any;
  paymentTermList:any = [];
  selectedPayment:any;
  selectedSiteMaterial:any;
  siteMaterialList:any = [];
  companyGroupLists: any;
  clientCompany: any;
  siteselectedMaterialList: any=[];
  constructor(private warehouseService:warehouseService,private WorkorderService:WorkorderService,private departmentService:departmentService,private verticalService:verticalService,private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService) {
  } 
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  } 
  updateForm(data) {
    console.log(JSON.stringify(data))
    this.firstFormGroup = this.fb.group({
      uuid:[data.uuid],
      woNo: [data.woNo, [
      ]],
      woDate: [new Date(data.woDate), [
      ]],
      parentuuid:[data.parentuuid],
      groupuuid: [data.groupuuid, [
      ]], clientuuid: [data.clientuuid, [
      ]],
      siteuuid: [data.siteuuid, [
      ]],
      verticaluuid: [data.verticaluuid, [
      ]],
      deptuuid: [data.departmentuuid, [
      ]],
      paymentTerm: ['', [
      ]],
      wareuuid:[data.wareuuid]

    });
  
    this.siteselectedMaterialList = data.materialArray;
    this.paymentTermList=[];
    for(var i =0 ;i<data.paymentTerm.length ;i++){
      this.paymentTermList.push({
        name:data.paymentTerm[i].split("=")[0],
        value:data.paymentTerm[i].split("=")[1]
      })
    }
     this.change('company');
     this.changeDepartment();
     this.getdVerticalList();
  
     this.clientOfgroup(this.firstFormGroup.value.groupuuid,'group');
    // this.clientOfgroup(this.firstFormGroup.value.clientuuid,'client');
     
  }
  createForm() {
    this.firstFormGroup = this.fb.group({
      woNo: ['', [
      ]],
      woDate: ['', [
      ]],
      parentuuid:[''],
      groupuuid: ['', [
      ]], clientuuid: ['', [
      ]],
      siteuuid: ['', [
      ]],
      verticaluuid: ['', [
      ]],
      deptuuid: ['', [
      ]],
      paymentTerm: ['', [
      ]],
      wareuuid:['']

    });
    this.secondFormGroup = this.fb.group({
      materialArray: [[this.fb.group({
        matuuid: [''],
        qty: [],
        unit: [],
        rate: [],
        tax: [] 
      }
      )
      ]

      ]

    });
  }
  wareHouseList:any =[];
  warehouseGet(){
this.warehouseService.warehouseList(this.firstFormGroup.value.parentuuid).subscribe(res=>{
this.wareHouseList = res.data
})
  }
  change(data){
    if(data =='company'){
      this.warehouseGet();
      this.getdVerticalList();
      this.getpaymenTermList();
     }
  }
  getsiteMaterialGet(){
    this.WorkorderService.siteMaterialGet(this.firstFormGroup.value.siteuuid).subscribe(res=>{

   this.siteMaterialList  =  res.data;

    })
  }
  getpaymenTermList(){
    this.WorkorderService.paymentTermGet(this.firstFormGroup.value.parentuuid).subscribe(res=>{
       
    this.paymentList =  res.data;

    })
  }

  addSiteMaterial(){
    if(this.selectedSiteMaterial){
      let selectsite = this.siteMaterialList.filter((data)=>{
        if(data.uuid == this.selectedSiteMaterial){return true}else{
          return false;
        }
      })[0];
       this.siteselectedMaterialList.push({
        name:selectsite.name,
        value :'',
        description:selectsite.materialDescription,
        qty:'',
        unit:'',
        rate:'',
        tax:'',
        matuuid:selectsite.uuid
      })
       this.selectedSiteMaterial = '';
    }

  }
  addPaymentTerm(){
    if(this.selectedPayment.length >0){
      let paymentTerm ='';
      for(var i=0 ;i<this.selectedPayment.length ;i++){
        if(this.selectedPayment.length > 1){
         if(i != this.selectedPayment.length-1){
           paymentTerm = paymentTerm+ this.selectedPayment[i] +'+'; 
         }else{
           paymentTerm = paymentTerm+ this.selectedPayment[i]  ; 
         }
        }else{
         paymentTerm = paymentTerm+ this.selectedPayment[i]  ;
 
        }
     
     
     }
     this.paymentTermList.push({
       name:paymentTerm,
       value :''
     })
     this.selectedPayment = [];
    }
   
  }
  remove(index) {
    this.paymentTermList.splice(index, 1); 
  }
  removeSite(index){
    this.siteselectedMaterialList.splice(index, 1); 

  }
  getdVerticalList() {
    this.verticalService.verticalList(this.firstFormGroup.value.parentuuid).subscribe(res => {
      this.verticalList = res.data;

    })
  }
  
  changeDepartment(){
    this.departmentService.verticalDepartment(this.firstFormGroup.value.verticaluuid).subscribe(res => {
      this.departmentList = res.data;
    })
    
  }
  companyLists:any;
  companyList(){
    this.CompanyService.companyList().subscribe(res=>{
      this.companyGroupLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'group' && !data.iscompany ){
          return true
        }else{
          return false;
        }
      }); 
      this.companyLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'all'||data.type.toLowerCase() == 'company'){
          return true
        }else{
          return false;
        }
      }); 
       })
  }
  clientOfgroup(data,type){
    this.CompanyService.companyUnderList(data).subscribe(res=>{
       if(type =='group'){
        this.clientCompany = res.data;

      }
      if(type =='client'){
        this.companySiteLists = res.data;
        this.getsiteMaterialGet();

      }
    })
  }
  createCompany() {
 let dataJson = this.firstFormGroup.value;
 dataJson.paymentTerm =this.paymentTermList;
 dataJson.materialArray =this.siteselectedMaterialList;
 console.log(JSON.stringify(dataJson))
    this.AppLoaderService.open();
    this.WorkorderService.workorderCreate(dataJson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['workorder'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  updateCompany() {
    let dataJson = this.firstFormGroup.value;
    dataJson.paymentTerm =this.paymentTermList;
    dataJson.materialArray =this.siteselectedMaterialList;
    console.log(JSON.stringify(dataJson))
       this.AppLoaderService.open();
       this.WorkorderService.workorderUpdate(dataJson).subscribe(res => {
         if (res.code == "200") {
           let datasend = {
             title: 'Success',
             message: res.message
           }
           this.dialog.confirm(datasend).subscribe(res1 => {
             this.Router.navigate(['workorder'])
           });
         }
         this.AppLoaderService.close();
   
       })
  }
  Appendwo() {
    let dataJson = this.firstFormGroup.value;
    dataJson.paymentTerm =this.paymentTermList;
    dataJson.materialArray =this.siteselectedMaterialList;
    console.log(JSON.stringify(dataJson))
       this.AppLoaderService.open();
       this.WorkorderService.workorderAppend(dataJson).subscribe(res => {
         if (res.code == "200") {
           let datasend = {
             title: 'Success',
             message: res.message
           }
           this.dialog.confirm(datasend).subscribe(res1 => {
             this.Router.navigate(['workorder'])
           });
         }
         this.AppLoaderService.close();
   
       })
  }
  workorderDetail(data){
    this.WorkorderService.workorderDetail(data).subscribe(res=>{
      console.log(JSON.stringify(res))
       this.updateForm(res);
    })
  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
     this.companyList();
    this.createForm();
    this.workorderDetail(sessionStorage.getItem("workorderSelecteduuid"));

    // if(this.userdata.role =='Admin'){
     
    // }else{
    //   this.change('company') 
    // }
  }
  

 

}
