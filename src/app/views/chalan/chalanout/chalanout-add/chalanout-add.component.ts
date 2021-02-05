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
import { warehouseService } from 'app/views/warehouse-management/warehouse.service';

@Component({
  selector: 'app-chalanout-add',
  templateUrl: './chalanout-add.component.html',
  styleUrls: ['./chalanout-add.component.scss']
})
export class ChalanoutAddComponent implements OnInit {
  firstFormGroup: FormGroup;
  woList: any;

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
  searchMaterial:any=''
  createForm() {
    this.firstFormGroup = this.fb.group({
      poNo: ['', [
      ]],
      parentCompany: ['', [
      ]],
      workorderuuid:[{value:sessionStorage.getItem('workuuid'),disabled:true}],
       client: [''],
      materialId: [''],
      wareuuid: ['']
    });

  }
  materialData: any = [];
  addMaterial() {
      this.materialData.push(
      {
         materialuuid:  (this.firstFormGroup.value.materialId).uuid ,
        name: (this.firstFormGroup.value.materialId).name ,
        description: (this.firstFormGroup.value.materialId).description,
        unit:(this.firstFormGroup.value.materialId).unit ,
        materialcost:"0"
        })
  }
  change(data) {
    this.getWorkorderCompanyList(this.firstFormGroup.value.parentCompany)
    this.warehouseGet();
    this.getchalanPoList()
    this.materialService.getCompanymaterial(this.firstFormGroup.value.parentCompany).subscribe(res => {
      this.materialList = res.data;
    })

  }
  changePo(data){
    this.chalanService.chalanPoDetail(this.firstFormGroup.value.chalanPONouuid).subscribe(res=>{
      console.log(JSON.stringify(res))
      this.firstFormGroup = this.fb.group({
        chalanNo: [this.firstFormGroup.value.chalanNo, [
        ]],
        parentCompany: [this.firstFormGroup.value.parentCompany, [
        ]],
        chalanPONouuid:[this.firstFormGroup.value.chalanPONouuid],
        vendor: [res.client],
        wareuuid: [this.firstFormGroup.value.chalanPONouuid.wareuuid],
       });
      for(var i=0;i<res.chalanPoMateriaRelationship.length ;i++){
        this.materialData.push({
          matQty:res.chalanPoMateriaRelationship[i].matQty,
          materialcost:res.chalanPoMateriaRelationship[i].matCost,
          materialuuid:res.chalanPoMateriaRelationship[i].uuid,
          name:res.chalanPoMateriaRelationship[i].name,
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
    let dataJson = this.firstFormGroup.getRawValue();
    dataJson.materialList = this.materialData;
      this.AppLoaderService.open();
    this.chalanService.poCreate(dataJson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: "You Have Succesfully Created Delivery Note"
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          if(this.userdata.role =='Project'){
            this.Router.navigate(['workorder/pm'])

          }else{
            
            this.Router.navigate(['chalan/in'])

          }
        });
      }
      this.AppLoaderService.close();

    })
  }
  getWorkorderCompanyList(comapantuuid){
    this.WorkorderService.workorderComapnyGet(comapantuuid).subscribe(res=>{
       
   this.woList  =  res.data;

    })
  }
  getpmWorkOrder(){
    this.WorkorderService.workorderGetByPm().subscribe(res=>{
       
      this.woList  =  res.data;
   
       }) 
       this.materialService.getCompanymaterial(this.firstFormGroup.value.parentCompany).subscribe(res => {
        this.materialList = res.data;
      })
  }
  href: any;
  pageType;any;
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));

    this.href = this.Router.url;
    if (this.href == '/chalan/out/Add') {
      this.pageType = 'Add';
      this.createForm();

    }
    if (this.href == '/chalan/out/Update') {
      this.pageType = 'Add';
      this.createForm();

    }
     if(this.userdata.role =='Admin'){
      this.getCompanyList();

    }else if(this.userdata.role =='Project'){
    this.getpmWorkOrder();
    
    }else{
      this.change('')
    }
  }

}
