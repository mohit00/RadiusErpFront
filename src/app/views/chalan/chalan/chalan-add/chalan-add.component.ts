import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from 'app/views/company-management/company.service';
import { NavigationService } from 'app/shared/services/navigation.service';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { verticalService } from '../../../company-management/vertical.service'
import { departmentService } from '../../../company-management/department.service'
import { ChalanService } from '../chalan.service'
import {WorkorderService} from '../../../workorder-management/workorder.service'
import { materialService } from '../../../material-management/material.serivce'
import { warehouseService } from 'app/views/warehouse-management/warehouse.service';

@Component({
  selector: 'app-chalan-add',
  templateUrl: './chalan-add.component.html',
  styleUrls: ['./chalan-add.component.scss']
})
export class ChalanAddComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private warehouseService:warehouseService,private chalanService: ChalanService,private WorkorderService:WorkorderService, private departmentService: departmentService, private verticalService: verticalService, private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService, private materialService: materialService) {
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  CompanyList: any = [];
  clinetList: any = [];
  poList:any =[];
  getchalanPoList(){
    this.chalanService.chalanPoList(this.firstFormGroup.value.parentCompany).subscribe(res=>{
        this.poList = res.data;
    
       })

  }
  getCompanyList() {
    this.CompanyService.companyList().subscribe(res => {
       this.CompanyList = res.data.filter((data) => {
        if (data.iscompany) {
          return true;
        } else {
          return false;

        }
      })
      this.clinetList = res.data.filter((data) => {
        if (!data.iscompany) {
          return true;
        } else {
          return false;

        }
      })
    })
  }
  materialList: any = [];
  createForm() {
    this.firstFormGroup = this.fb.group({
      chalanNo: ['', [
      ]],
      chalanuuid:[''],
      parentCompany: ['', [
      ]],
      chalanPONouuid:[''],
      vendor: [''],
      materialId: [''],
      wareuuid: [''],
      chalanType:['Chalan'],
      chalanDate:[new Date()]
    });

  }
  materialData: any = [];
  addMaterial() {
     this.materialData.push(
      {
         materialuuid:  (this.firstFormGroup.value.materialId).uuid ,
        name: (this.firstFormGroup.value.materialId).name,
        description:(this.firstFormGroup.value.materialId).description
        })
  }
  change(data) {
    this.warehouseGet();
    this.getchalanPoList()
    this.materialService.getCompanymaterial(this.firstFormGroup.value.parentCompany).subscribe(res => {
      this.materialList = res.data;
    })

  }
  changePo(){
    this.materialData = [];
    this.chalanService.chalanPoDetail(this.firstFormGroup.value.chalanPONouuid).subscribe(res=>{
      console.log(JSON.stringify(res))
      this.firstFormGroup = this.fb.group({
        chalanNo: [this.firstFormGroup.value.chalanNo, [
        ]],
        chalanType:[this.firstFormGroup.value.chalanType],

        parentCompany: [this.firstFormGroup.value.parentCompany, [
        ]],
        chalanPONouuid:[this.firstFormGroup.value.chalanPONouuid],
        vendor: [res.client],
        wareuuid: [this.firstFormGroup.value.wareuuid],
        chalanuuid:[this.firstFormGroup.value.chalanuuid],
        chalanDate:[this.firstFormGroup.value.chalanDate]
       });
      for(var i=0;i<res.chalanPoMateriaRelationship.length ;i++){
      this.materialData.push({
          matQty:res.chalanPoMateriaRelationship[i].matQty,
          materialcost:res.chalanPoMateriaRelationship[i].matCost.toString(),
          materialuuid:res.chalanPoMateriaRelationship[i].uuid,
          name:res.chalanPoMateriaRelationship[i].name,
          matSend:res.chalanPoMateriaRelationship[i].matSend ,
          description:res.chalanPoMateriaRelationship[i].description
        })
      }
     })
  }
  remove(index) {
    this.materialData.splice(index, 1); 
  }
  getsiteMaterialGet() {
    this.WorkorderService.siteMaterialGet(this.firstFormGroup.value.siteuuid).subscribe(res => {


    })
  }
  wareList:any;
  warehouseGet(){
    this.warehouseService.warehouseList(this.firstFormGroup.value.parentCompany).subscribe(res=>{
      this.wareList = res.data;
    })
  }
  createCompany() {
    for(var i =0;i<this.materialData.length;i++){
      if(this.materialData[i].materialqty){ 
      }else{
this.materialData[i].materialqty = "0";
      }
    }
    let dataJson = this.firstFormGroup.value;
    dataJson.materialList = this.materialData;
    console.log(JSON.stringify(dataJson))
    this.AppLoaderService.open();
    this.chalanService.chalanCreate(dataJson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['chalan/in'])
        });
      }else{
        let datasend = {
          title: 'Error',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
         });
      }
      this.AppLoaderService.close();

    })
  }
  updateCompany(){
      let dataJson = this.firstFormGroup.value;
    dataJson.materialList = this.materialData;
    console.log(JSON.stringify(dataJson))
    this.AppLoaderService.open();
    this.chalanService.chalanUpdate(dataJson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['chalan/in'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  href: any;
  pageType;any;
  userdata:any;
  detailChalan(){
    this.chalanService.chalanDetail(sessionStorage.getItem("chalaninuuid")).subscribe(res=>{
      console.log(JSON.stringify(res))
      this.firstFormGroup = this.fb.group({
        chalanNo: [res.chalanNo, [
        ]],
        parentCompany: ['', [
        ]],
        chalanuuid:[res.chalanuuid],
        chalanPONouuid:[res.chalanPONouuid],
        vendor: [res.clientuuid],
        wareuuid: [res.wareuuid],
        chalanType:[res.chalanType],
        chalanDate:[res.chalanDate]

       });
       this.changePo();
    })
  }
  ngOnInit() {
    this.createForm();

    this.href = this.Router.url;
    if (this.href == '/chalan/in/Add') {
      this.pageType = 'Add';
 
    }
    if (this.href == '/chalan/in/Update') {
      this.pageType = 'Update';
      this.detailChalan();
      
    }
    this.getCompanyList();
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    if(this.userdata.role =='Admin'){

    }else{
      this.change('')
    }
  }

}
