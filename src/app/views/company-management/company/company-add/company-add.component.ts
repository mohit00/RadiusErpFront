import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { FileUploader } from 'ng2-file-upload';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
import { ICountry, IState, ICity } from 'country-state-city'
import csc from 'country-state-city'
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss'],
  animations: egretAnimations

})
export class CompanyAddComponent implements OnInit, OnDestroy {
  pageType: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: any
  stateList: any;
  cityList: any;
  href: any;
  constructor(private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService) {
    this.countryList = csc.getAllCountries();
    this.cityList = [];
  }
  selectCountry() {
    this.stateList = csc.getStatesOfCountry(this.firstFormGroup.value.country1);
    this.cityList = [];

  }
  selectState() {
    this.cityList = csc.getCitiesOfState(this.firstFormGroup.value.state1);


  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  //  "name":"Cleo county",
  //  "Address":"H 98 sector 63",
  //  "country":"India",
  //  "city":"Noida",
  //  "state":"UP",
  //  "zipcode":"201301",
  //  "PAN":"BCGPN6150D",
  //  "GSTno":"52134214241",
  //  "type":"client",
  createForm() {
    this.firstFormGroup = this.fb.group({
      name: ['', [
      ]],
      Address: ['', [
      ]],
      country1: ['101', [
      ]],
      city1: ['', [
      ]],
      state1: ['', [
      ]],
      zipcode: ['', [
      ]],
      phoneNumber: ['', [
      ]]
    });
    this.secondFormGroup = this.fb.group({
      PAN: ['', [
      ]],
      GSTno: ['', [
      ]],
      type: ['', [
      ]],
      isparent: [false],
      parentuuid: ['']
    });
    this.selectCountry();
  }
  companyLists: any;
  async companyList() {

    this.CompanyService.companyList().subscribe(res => {
      this.companyLists = res.data.filter((data) => {
        if (data.type.toLowerCase() == 'group') {
          return true;
        } else if (data.type.toLowerCase() == 'all') {
          return true;
        }

      })

    })
  }
  createCompany() {
    let datajson = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
    datajson.country = this.countryList.filter((data) => { return data.id === datajson.country1 })[0].name
    datajson.state = this.stateList.filter((data) => { return data.id === datajson.state1 })[0].name
    datajson.city = this.cityList.filter((data) => { return data.id === datajson.city1 })[0].name;
    this.AppLoaderService.open();
    this.CompanyService.companyCreate(datajson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company'])
        });
      }
      this.AppLoaderService.close();

    })

  }
  updateCompany() {
    let datajson = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
    datajson.country = this.countryList.filter((data) => { return data.id === datajson.country1 })[0].name
    datajson.state = this.stateList.filter((data) => { return data.id === datajson.state1 })[0].name
    datajson.city = this.cityList.filter((data) => { return data.id === datajson.city1 })[0].name;
    datajson.uuid = this.companyDetailS.uuid;
    this.AppLoaderService.open();
    this.CompanyService.companyUpdate(datajson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.Router.navigate(['company'])
        });
      }
      this.AppLoaderService.close();

    })
  }
  ngOnInit() {
    this.companyList();

    this.createForm();

    this.href = this.Router.url;
    if (this.href == '/company/Update') {
      this.pageType = "Update"
      this.companyDetail();
    } else {
      this.pageType = "Add"
    }
  }
  companyDetailS: any = {};
  companyDetail() {
    this.CompanyService.companyDetail(sessionStorage.getItem("companySelecteduuid")).subscribe(res => {
      this.companyDetailS = res.data;
      this.updateForm(this.companyDetailS);

    })
  }

  updateForm(data) {

    let countryid = this.countryList.filter(res => {
      return res.name == data.country
    })[0].id
    let isparent = false;
    if (data.parentuuid) {
      isparent = true;
    }
    let stateid
    this.stateList = csc.getStatesOfCountry(countryid);

    for (var i = 0; i < this.stateList.length; i++) {
      if (this.stateList[i].name == data.state) {
        stateid = this.stateList[i].id;
        break;
      }
    }
    let cityid;
    this.cityList = csc.getCitiesOfState(stateid);

    for (var i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].name == data.city) {
        cityid = this.cityList[i].id;
        break;
      }
    }


    this.firstFormGroup = this.fb.group({
      name: [data.name, [
      ]],
      Address: [data.address, [
      ]],
      country1: [countryid, [
      ]],
      city1: [cityid, [
      ]],
      state1: [stateid, [
      ]],
      zipcode: [data.zipcode, [
      ]],
      phoneNumber: [data.phoneNumber, [
      ]]
    });
    this.secondFormGroup = this.fb.group({
      PAN: [data.pan, [
      ]],
      GSTno: [data.gstno, [
      ]],
      type: [data.type, [
      ]],
      isparent: [isparent],
      parentuuid: [data.parentuuid]
    });
    // this.firstFormGroup.setValue({
    //   city1: cityid, 
    //   state1: stateid
    // });
    this.selectState();


  }
  ngOnDestroy() {
    sessionStorage.removeItem("companySelecteduuid")
  }
}
