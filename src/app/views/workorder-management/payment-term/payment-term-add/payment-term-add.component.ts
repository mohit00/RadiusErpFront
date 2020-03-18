import { Component, OnInit } from '@angular/core';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'app/views/company-management/company.service';
import { Router } from '@angular/router';
import { WorkorderService } from '../../workorder.service'
@Component({
  selector: 'app-payment-term-add',
  templateUrl: './payment-term-add.component.html',
  styleUrls: ['./payment-term-add.component.scss']
})
export class PaymentTermAddComponent implements OnInit {
  rows: any = [];
  temp: any = [];
  companyList: any;
  constructor(private dialog: AppConfirmService,
    private AppLoaderService: AppLoaderService,
    private fb: FormBuilder,
    private CompanyService: CompanyService,
    private Router: Router,
    private WorkorderService: WorkorderService) { }
  href: any;
  pageType: any = '';
  departmentDetails: any;
  departmentDetail() {
    this.WorkorderService.paymentTermDetail(sessionStorage.getItem("paymentTermSelecteduuid")).subscribe(res => {
      console.log(JSON.stringify(res));
      this.updateForm(res);
    })
  }
  ngOnInit() {
    this.getCompanyList()
    this.href = this.Router.url;
    if (this.href == '/workorder/payment/Update') {
      this.pageType = "Update"
      this.departmentDetail();
    } else {
      this.pageType = "Add"
    }
    this.createForm();
  }
  firstFormGroup: FormGroup;

  createForm() {

    this.firstFormGroup = this.fb.group({
      name: ['', [
      ]],
      companyuuid: ['']
    });
  }
  updateForm(data) {
    this.firstFormGroup = this.fb.group({
      name: [data.name, [
      ]],
      companyuuid: [data.companyuuid],
      description: [data.description],
      paytermuuid: [data.uuid]
    });
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  getCompanyList() {
    this.CompanyService.companyList().subscribe(res => {
      this.companyList = res.data.filter((data) => {
        if (data.type.toLowerCase() == 'all' || data.type.toLowerCase() == 'company') {
          return true
        } else {
          return false;
        }
      });
    })
  }
  createDepartment() {
    this.AppLoaderService.open();
    this.WorkorderService.paymentTermCreate(this.firstFormGroup.value).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['workorder/payment'])
        });
      }
      this.AppLoaderService.close();
    })
  }
  updateDepartment() {
    this.AppLoaderService.open();
    this.WorkorderService.paymentTermUpdate(this.firstFormGroup.value).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['workorder/payment'])
        });
      }
      this.AppLoaderService.close();
    })
  }
} 