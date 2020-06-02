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

  constructor(private chalanService: ChalanService,private WorkorderService:WorkorderService, private departmentService: departmentService, private verticalService: verticalService, private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService, private materialService: materialService) {
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
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
    })
  }
  materialList: any = [];
  createForm() {
    this.firstFormGroup = this.fb.group({
      chalanPONo: ['', [
      ]],
      parentCompany: ['', [
      ]],
      vendor: [''],
      materialId: ['']
    });

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
    let dataJson = this.firstFormGroup.value;
    dataJson.materialList = this.materialData;
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
  ngOnInit() {
    this.href = this.Router.url;
    if (this.href == '/chalan/po/Add') {
      this.pageType = 'Add';
      this.createForm();

    }
    this.getCompanyList();
  }

}
