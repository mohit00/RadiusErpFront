import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from 'app/views/company-management/company.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { verticalService } from '../../../company-management/vertical.service'
import { departmentService } from '../../../company-management/department.service'
import { ChalanService } from '../../chalan/chalan.service'
import {WorkorderService} from '../../../workorder-management/workorder.service'
import { materialService } from '../../../material-management/material.serivce'
@Component({
  selector: 'app-chalanpm-add',
  templateUrl: './chalanpm-add.component.html',
  styleUrls: ['./chalanpm-add.component.scss']
})
export class ChalanpmAddComponent implements OnInit {
  firstFormGroup: FormGroup;
  secountFormGroup:FormGroup;
  constructor(private chalanService: ChalanService,private WorkorderService:WorkorderService, private departmentService: departmentService, private verticalService: verticalService, private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService, private materialService: materialService) {
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  public has2Error = (controlName: string, errorName: string) => {
    return this.secountFormGroup.controls[controlName].hasError(errorName);
  }
  CompanyList: any = [];
  clinetList: any = [];

  getCompanyList() {
    this.CompanyService.companyList().subscribe(res => {
      console.log(JSON.stringify(res.data))
      this.CompanyList = res.data.filter((data) => {
        if (data.iscompany) {
          return true;
        } else {
          return false;

        }
      })
      this.clinetList = res.data.filter((data) => {
         if (!data.iscompany && data.type == 'Vendor'  ) {
          return true;
        } else {
          return false;

        }
      })
      this.siteList = res.data.filter((data) => {
        if ( data.type == 'Site'  ) {
         return true;
       } else {
         return false;

       }
     })
     this.groupList = res.data.filter((data) => {
      if ( data.type == 'Group'  ) {
       return true;
     } else {
       return false;

     }
   })
    })
  }
  changegroup(){
    this.getCompanyListUnder(this.secountFormGroup.value.groupuuid);
  }
  getCompanyListUnder(data) {
    this.CompanyService.companyUnderList(data).subscribe(res=>{
      this.siteList = res.data;
    })
  }
  materialList: any = [];
  groupList:any=[]
  siteList:any=[];
  selectedPayment:any;
  paymentList:any = [];
  paymentTermList:any=[];
  getpaymenTermList(){
    this.WorkorderService.paymentTermGet('').subscribe(res=>{
       
    this.paymentList =  res.data;

    })
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
  createForm() {
    this.firstFormGroup = this.fb.group({
      chalanPONo: ['', [
      ]],
      parentCompany: ['', [
      ]],
      vendor: [''],
      materialId: ['']
    });
    this.secountFormGroup = this.fb.group({
      deliveryToClient: [false, [
      ]],
      clientuuid:[''],
      groupuuid:[''],
      deliverTerm: [''],
      isGroup:[false],
      termOfPayment: ['']
    });
  }

  selectToggle(){
    if( this.secountFormGroup.value.isGroup){

   }else{
     this.getCompanyList();
   }
  }
  materialData: any = [];
  addMaterial() {
     this.materialData.push(
      {
         materialuuid:  (this.firstFormGroup.value.materialId).uuid ,
        name: (this.firstFormGroup.value.materialId).name 
        })
  }

  change(data) {
    this.materialService.getCompanymaterial(this.firstFormGroup.value.parentCompany).subscribe(res => {
      this.materialList = res.data;
    })

  }
  remove(index) {
    this.materialData.splice(index, 1); 
  }
  getsiteMaterialGet() {
    this.WorkorderService.siteMaterialGet(this.firstFormGroup.value.siteuuid).subscribe(res => {


    })
  }
  createCompany() {
    let dataJson =  { ...this.firstFormGroup.value, ...this.secountFormGroup.value };

     dataJson.materialList = this.materialData;
    dataJson.paymentTerm =this.paymentTermList;
    console.log(JSON.stringify(dataJson))

    this.AppLoaderService.open();
   
    this.chalanService.chalanPoCreate(dataJson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: "Po Successfully Created"
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['chalan/po'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  href: any;
  pageType;any;
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
   this.getpaymenTermList();
    this.href = this.Router.url;
    if (this.href == '/chalan/po/Add') {
      this.pageType = 'Add';
      this.createForm();

    }
    this.getCompanyList();

    if(this.userdata.role =='Admin'){

    }else{
      this.change(this.firstFormGroup.value.parentCompany)
    }
  }

}
