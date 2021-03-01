import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from 'app/views/company-management/company.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { verticalService } from '../../../company-management/vertical.service'
import { departmentService } from '../../../company-management/department.service'
import { WorkorderService } from '../../workorder.service'
import { warehouseService } from 'app/views/warehouse-management/warehouse.service';
import { materialService } from 'app/views/material-management/material.serivce';

@Component({
  selector: 'app-workorder-add',
  templateUrl: './workorder-add.component.html',
  styleUrls: ['./workorder-add.component.scss']
})
export class WorkorderAddComponent implements OnInit {
  pageType: any;
  woType: any ='all';
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
  paymentTermList: any = [];
  selectedPayment: any;
  selectedSiteMaterial: any;
  siteMaterialList: any = [];
  materialList: any = [];
  searchCtrl:any ="";
  companyGroupLists: any;
  clientCompany: any;
  siteselectedMaterialList: any = [];
  billingSite: any;
  searchGroup:any= '';
  searchClient:any =''
  constructor(private materialService:materialService,private warehouseService: warehouseService, private WorkorderService: WorkorderService, private departmentService: departmentService, private verticalService: verticalService, private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService) {
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  updateForm(data) {
    console.log(JSON.stringify(data))
    this.firstFormGroup = this.fb.group({
      uuid: [data.uuid],
      woNo: [data.woNo, [
      ]],
      woDate: [new Date(data.woDate), [
      ]],
      parentuuid: [data.parentuuid],
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
      wareuuid: [data.wareuuid],
      isGroup:[data.isGroup]


    });
this.woType = data.woType;
if(this.woType == 'direct'){
  for(var i =0 ;i<data.materialArray2.length;i++){
    data.materialArray2[i].rate= data.materialArray2[i].rate.toString();
    data.materialArray2[i].qty= data.materialArray2[i].qty.toString();

    this.siteselectedMaterialList = data.materialArray2;

  }
}else{
  for(var i =0 ;i<data.materialArray.length;i++){
    data.materialArray[i].rate= data.materialArray[i].rate.toString();
    this.siteselectedMaterialList = data.materialArray;

  }
}

if(data.differentBilling){
  this.isdifferentBilling();

}
 
    this.paymentTermList = [];
    for (var i = 0; i < data.paymentTerm.length; i++) {
      this.paymentTermList.push({
        name: data.paymentTerm[i].split("=")[0],
        value: data.paymentTerm[i].split("=")[1]
      })
    }
    this.change('company');
    this.changeDepartment();
    this.clientOfgroup(this.firstFormGroup.value.groupuuid, 'group');
    this.clientOfgroup(this.firstFormGroup.value.clientuuid, 'client');
    this.secondFormGroup = this.fb.group({
      differentBilling:[data.differentBilling],
      billingCompanyuuid:[data.billingCompanyuuid]
    })
  }
  
  createForm() {
    this.firstFormGroup = this.fb.group({
      woNo: ['', [
      ]],
      isGroup: [true],
      woDate: ['', [
      ]],
      parentuuid: [''],
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
      wareuuid: ['']

    });
    this.secondFormGroup = this.fb.group({
      materialArray: [[this.fb.group({
        matuuid: [''],
        qty: [],
        unit: [],
        rate: [],
        tax: [],
      
      }
      )
      ],
     
      ] ,differentBilling:[false],
      billingCompanyuuid:['']

    });
  }
  wareHouseList: any = [];
  warehouseGet() {
    this.warehouseService.warehouseList(this.firstFormGroup.value.parentuuid).subscribe(res => {
      this.wareHouseList = res.data
    })
  }
  change(data) {
    if (data == 'company') {
      this.warehouseGet();
      this.getdVerticalList();
      this.getpaymenTermList();
    }
  }
  getsiteMaterialGet() {
    this.WorkorderService.siteMaterialGet('this.firstFormGroup.value.siteuuid').subscribe(res => {
      // alert(JSON.stringify(res.data))
      this.siteMaterialList = res.data.filter(word => word.new  );;
     
    })
  }
  getMaterialGet() {
  this.materialService.getCompanymaterial("").subscribe(res => {

      this.materialList = res.data;

    })
  }
  getpaymenTermList() {
    this.WorkorderService.paymentTermGet(this.firstFormGroup.value.parentuuid).subscribe(res => {

      this.paymentList = res.data;

    })
  }

  addSiteMaterial() {
    if (this.selectedSiteMaterial) {
      let selectsite = this.siteMaterialList.filter((data) => {
        if (data.uuid == this.selectedSiteMaterial) { return true } else {
          return false;
        }
      })[0];
      this.siteselectedMaterialList.push({
        name: selectsite.name,
        value: '',
        description: selectsite.materialDescription,
        qty: '',
        unit: '',
        rate: '',
        tax: '',
        matuuid: selectsite.uuid
      })
      this.selectedSiteMaterial = '';
    }

  }
  materailDetail(data){
    
  }
  addMaterial() {
     if (this.selectedSiteMaterial) {
      let selectsite ;
      this.materialService.materialDetail(this.selectedSiteMaterial).subscribe(res=>{
     
        selectsite= res;
        this.siteselectedMaterialList.push({
          name: selectsite.name,
          value: '',
          description: selectsite.description,
          qty: '',
          unit: selectsite.unit,
          rate: '',
          tax: selectsite.taxRate,
          matuuid: selectsite.uuid 
         })
         
        this.selectedSiteMaterial = '';
  
      })
    }

  }
  addPaymentTerm() {
    if (this.selectedPayment.length > 0) {
      let paymentTerm = '';
      for (var i = 0; i < this.selectedPayment.length; i++) {
        if (this.selectedPayment.length > 1) {
          if (i != this.selectedPayment.length - 1) {
            paymentTerm = paymentTerm + this.selectedPayment[i] + '+';
          } else {
            paymentTerm = paymentTerm + this.selectedPayment[i];
          }
        } else {
          paymentTerm = paymentTerm + this.selectedPayment[i];

        }


      }
      this.paymentTermList.push({
        name: paymentTerm,
        value: ''
      })
      this.selectedPayment = [];
    }

  }
  remove(index) {
    this.paymentTermList.splice(index, 1);
  }
  removeSite(index) {
    this.siteselectedMaterialList.splice(index, 1);

  }
  getdVerticalList() {
    this.verticalService.verticalList(this.firstFormGroup.value.parentuuid).subscribe(res => {
      this.verticalList = res.data;

    })
  }

  changeDepartment() {
    this.departmentService.verticalDepartment(this.firstFormGroup.value.verticaluuid).subscribe(res => {
      this.departmentList = res.data;
    })

  }
  companyLists: any;
  companyList() {
    this.CompanyService.companyList().subscribe(res => {
      this.companyGroupLists = res.data.filter((data) => {
        if (data.type.toLowerCase() == 'group' && !data.iscompany) {
          return true
        } else {
          return false;
        }
      });
      if (this.firstFormGroup.value.isGroup) {
        this.clientCompany = []
      } else {
        this.clientCompany = res.data.filter((data) => {
          if (data.type.toLowerCase() == 'site') {
            return true
          } else {
            return false;
          }
        });
      }


      this.companyLists = res.data.filter((data) => {
        if (data.type.toLowerCase() == 'all' || data.type.toLowerCase() == 'company') {
          return true
        } else {
          return false;
        }
      });
    })
  }
  clientOfgroup(data, type) {
    this.CompanyService.companyUnderList(data).subscribe(res => {
      if (type == 'group') {
        this.clientCompany = res.data; 
      }
      if (type == 'client') {
        this.companySiteLists = res.data;
        this.getsiteMaterialGet();

      }
    })
  }
  typeChange(){
    this.selectedSiteMaterial = '';
    this.siteselectedMaterialList = [];
  }
  createCompany() {

    let dataJson = this.firstFormGroup.value;
    dataJson.differentBilling = this.secondFormGroup.value.differentBilling;

    if(this.secondFormGroup.value.differentBilling){
      dataJson.billingCompanyuuid = this.secondFormGroup.value.billingCompanyuuid;

    }

    dataJson.woType = this.woType;
    dataJson.paymentTerm = this.paymentTermList;
    dataJson.materialArray = this.siteselectedMaterialList;
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
    dataJson.differentBilling = this.secondFormGroup.value.differentBilling;

    if(this.secondFormGroup.value.differentBilling){
      dataJson.billingCompanyuuid = this.secondFormGroup.value.billingCompanyuuid;

    }

    dataJson.woType = this.woType;
    dataJson.paymentTerm = this.paymentTermList;
    dataJson.materialArray = this.siteselectedMaterialList;
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
    dataJson.paymentTerm = this.paymentTermList;
    dataJson.materialArray = this.siteselectedMaterialList;
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
  workorderDetail(data) {
    this.WorkorderService.workorderDetail(data).subscribe(res => {
      console.log(JSON.stringify(res))
      this.updateForm(res);
    })
  }
  userdata: any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));

    this.getMaterialGet();
    this.companyList();
    this.createForm();
    this.getsiteMaterialGet();
    this.href = this.Router.url;
    if (this.href == '/workorder/Update') {
      this.pageType = "Update"
      this.workorderDetail(sessionStorage.getItem("workorderSelecteduuid"));
    } else if (this.href == '/workorder/Append') {
      this.pageType = "Append"
      this.workorderDetail(sessionStorage.getItem("workorderSelecteduuid"));

    } else if (this.href == '/workorder/AppendView') {
      this.pageType = "AppendView"
      this.workorderDetail(sessionStorage.getItem("workorderSelectedAppenduuid"));

    } else {
      this.pageType = "Add"

    }
    if (this.userdata.role == 'Admin') {

    } else {
      this.change('company')
    }
    this.CompanyService.companyList().subscribe(res => {
      
      
      this.billingSite = res.data.filter((data) => {
        if (data.type.toLowerCase() == 'site') {
          return true
        } else {
          return false;
        }
      });})
  }
  isdifferentBilling() {
    if (this.secondFormGroup.value.differentBilling) {
     } else {
  
    }
  }
  isgroup() {
    if (this.firstFormGroup.value.isGroup) {
      this.clientCompany = []
    } else {
      this.companyList()
    }
  }



}
