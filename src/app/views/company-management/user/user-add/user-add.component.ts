import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
import { CompanyService } from '../../company.service';
import { departmentService } from '../../department.service'
import { userService } from '../../user.service'
import { verticalService } from '../../vertical.service'
import { promise } from 'protractor';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  rows: any = [];
  temp: any = [];
  companyList: any;
  verticalList: any;
  constructor(private verticalService: verticalService, private dialog: AppConfirmService, private AppLoaderService: AppLoaderService, private fb: FormBuilder, private CompanyService: CompanyService, private Router: Router, private departmentService: departmentService, private userService: userService) { }
  href: any;
  pageType: any = '';
  userDetails: any;
  userDetail() {
    this.userService.userDetail(sessionStorage.getItem("userSelecteduuid")).subscribe(res => {
      this.userDetails = res;
       
      this.updateForm(res);
    })
  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'))
    this.href = this.Router.url;
    if (this.href == '/company/user/Update') {
      this.pageType = "Update"
      this.userDetail();
    } else {
      this.pageType = "Add"
    }
    this.createForm();
    if(this.userdata.role == 'Admin'){
      this.getCompanyList()

    }else{
      this.getDepartmentList();
    this.getdVerticalList();
    }
  }
  firstFormGroup: FormGroup;

  createForm() {
    this.firstFormGroup = this.fb.group({
      name: ['', [
      ]],
      email: ['', [
      ]],
      password: ['', [
      ]],
      role: ['', [
      ]],
      type: ['user'],
      companyuuid: [''],
      verticaluuid: [''],
      departmentuuid: [''],
    });
  }
   updateForm(data) {
    this.firstFormGroup = this.fb.group({
      name: [data.name, [
      ]],
      email: [data.email, [
      ]],
      password: ['', [
      ]],
      role: [data.role, [
      ]],
      type: ['user'],
      companyuuid: [data.company],
      verticaluuid: [data.vertical],
      departmentuuid: [data.department],
    });
    this.getDepartmentList();
    this.getdVerticalList();

  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  getCompanyList() {
    this.CompanyService.companyList().subscribe(res => {
       this.companyList = res.data;
    })
  }
  getDepartmentList()  {
    this.departmentService.verticalDepartment(this.firstFormGroup.value.verticaluuid).subscribe(res => {
      this.departmentList = res.data;
    })
  }
  departmentList: any;
   getdVerticalList() {
    this.verticalService.verticalList(this.firstFormGroup.value.companyuuid).subscribe(res => {
      this.verticalList = res.data;

    })
  }

  createDepartment() {
    console.log(JSON.stringify(this.firstFormGroup.value))
    this.AppLoaderService.open();
    this.userService.userCreate(this.firstFormGroup.value).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company/user'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  updateDepartment() {
    this.AppLoaderService.open();

    this.userService.userUpdate(this.firstFormGroup.value).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company/user'])
        });
      }
      this.AppLoaderService.close();

    })
  }
}
