
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
import { IndianStatesCode } from './indianStatescode';
import {    ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss'],
  animations: egretAnimations 
})
export class CompanyAddComponent implements OnInit, OnDestroy {
  @ViewChild('stepper' , { static: false } ) stepper;
  showAdd: string;
  changeStep(index: number) {
    this.stepper.selectedIndex = index;
}

  pageType: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: any
  stateList: any;
  cityList: any;
  href: any;
  currenturl:any;
  selectedPage:any;
  constructor(private IndianStatesCode:IndianStatesCode,private CompanyService: CompanyService, private navService: NavigationService,
    private Router: Router, private fb: FormBuilder, private AppLoaderService: AppLoaderService, private dialog: AppConfirmService) {
      this.currenturl = Router.url;
       if(this.currenturl == '/company/Add'){
        this.selectedPage = 0;

      }else if(this.currenturl == '/company/under/Add'){
        this.selectedPage = 1;

      }
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
      ]],
      website: ['', [
      ]],
      stateCode:[''],
      companyEmail:['']
     });
    this.secondFormGroup = this.fb.group({
      PAN: ['', [
      ]],
      GSTno: ['', [
      ]],
      cnino:[''],
      type: [this.companyType, [
      ]],
      isparent: [false],
      parentuuid: [''],
      iscompany:[false]
    });
    this.selectCountry();
  }
  companyLists: any;
  clientCompany:any;
  companyListData:any = [];
  async companyList() {

    this.CompanyService.companyList().subscribe(res => { 
       this.companyLists = res.data ;
      this.companyListData = res.data
   
    })
  }
  showparent:any = false;
  selectType(){
    this.showparent = true;
    if(this.userData.role != 'Admin'){
      if(this.secondFormGroup.value.type == 'Group'){
        this.showparent = false;
      }else{
        this.showparent = true;

      }
    }
    if(this.secondFormGroup.value.type == 'All'){
      
    }else if(this.secondFormGroup.value.type == 'Group'){
      this.companyLists = this.companyListData.filter(res=>{
        if(res.type == "All"){
          return true;
        }else{
          return false;

        }
      })
    }else if(this.secondFormGroup.value.type == 'Vendor'){
      this.companyLists = this.companyListData.filter(res=>{
        return true;

      })
    }else if(this.secondFormGroup.value.type == 'Site'){
      this.companyLists = this.companyListData.filter(res=>{
        if(res.type == "Group"){
          return true;
        }else{
          return false;

        }
      })
    }
  }
  createCompany() { 
    let datajson = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
    if(datajson.country1){
      datajson.country = this.countryList.filter((data) => { return data.id === datajson.country1 })[0].name

    }
    if(datajson.state1){
      datajson.state = this.stateList.filter((data) => { return data.id === datajson.state1 })[0].name
      datajson.stateCode = this.IndianStatesCode.States.filter(
        res=>{
   
          if(res.name.toLowerCase().trim() == datajson.state.toLowerCase().trim()){
            return true
          }else{
            return false;
          }
        }
      )[0].code.toString() ;
    }
    if(datajson.city1){
      datajson.city = this.cityList.filter((data) => { return data.id === datajson.city1 })[0].name;

    }

     this.AppLoaderService.open();
    this.CompanyService.companyCreate(datajson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          if (this.href == '/company/Update') {
            this.Router.navigate(['company'])

      
          }
           if (this.href == '/company/Add') {
            this.Router.navigate(['company'])

          }else
          if (this.href == '/company/Client/Add') {
            this.Router.navigate(['company/Client'])

          }else if (this.href == '/company/Vendor/Add') {
            this.Router.navigate(['company/Vendor'])

      
          }
          
          if (this.href == '/company/Client/Update') {
            this.Router.navigate(['company/Client'])
      
            this.pagedatatype = 1;
          }else if (this.href == '/company/Vendor/Update') {
            this.Router.navigate(['company/Vendor'])
      
          }
      
        });
      }
      this.AppLoaderService.close();

    }) 
  }
  updateCompany() {
    let datajson = { ...this.firstFormGroup.value, ...this.secondFormGroup.value };
    if(datajson.country1){
      datajson.country = this.countryList.filter((data) => { return data.id === datajson.country1 })[0].name

    }
    if(datajson.state1){
      datajson.state = this.stateList.filter((data) => { return data.id === datajson.state1 })[0].name
      datajson.stateCode = this.IndianStatesCode.States.filter(
        res=>{
   
          if(res.name.toLowerCase().trim() == datajson.state.toLowerCase().trim()){
            return true
          }else{
            return false;
          }
        }
      )[0].code.toString() ;
    }
    if(datajson.city1){
      datajson.city = this.cityList.filter((data) => { return data.id === datajson.city1 })[0].name;

    }
  
    datajson.uuid = this.companyDetailS.uuid;
    this.AppLoaderService.open();
    this.CompanyService.companyUpdate(datajson).subscribe(res => {
      if (res.code == "200") {
        let datasend = {
          title: 'Success',
          message: res.message
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
         
          if (this.href == '/company/Update') {
            this.Router.navigate(['company'])

      
          }
           if (this.href == '/company/Add') {
            this.Router.navigate(['company'])

          }else
          if (this.href == '/company/Client/Add') {
            this.Router.navigate(['company/Client'])

          }else if (this.href == '/company/Vendor/Add') {
            this.Router.navigate(['company/Vendor'])

      
          }
          
          if (this.href == '/company/Client/Update') {
            this.Router.navigate(['company/Client'])
      
            this.pagedatatype = 1;
          }else if (this.href == '/company/Vendor/Update') {
            this.Router.navigate(['company/Vendor'])
      
          }
        });
      }
      this.AppLoaderService.close(); 
    })
  }
  pagedatatype:any ='';
  companyType:any = '';
  userData:any ;
  selectPage:any
  ngOnInit() {
    this.companyList(); 
 this.userData = JSON.parse(sessionStorage.getItem('user'));
    this.pagedatatype = 0;
    if(this.userData.role == 'Admin'){

    }
    this.href = this.Router.url;

    if (this.href == '/company/Update') {
      this.pageType = "Company Update"
      this.selectPage = 'Company';
    }
     if (this.href == '/company/Add') {
      this.selectPage = 'Company';

      this.companyType = 'All'
      this.pageType = "Company Add"
    }else
    if (this.href == '/company/Client/Add') {
      this.selectPage = 'Client';

      this.pageType = "Client Add"

      this.pagedatatype = 1;
    }else if (this.href == '/company/Vendor/Add') {
      this.companyType = 'Vendor'
      this.pageType = "Vendor Add"
      this.selectPage = 'Vendor';


    }
    
    if (this.href == '/company/Client/Update') {
      this.pageType = "Client Update"
      this.selectPage = 'Client';


      this.pagedatatype = 1;
    }else if (this.href == '/company/Vendor/Update') {
      this.pageType = "Vendor Update"
      this.selectPage = 'Vendor';

    }
     this.createForm(); 
      if (this.href.split("/")[this.href.split("/").length - 1] == 'Update') {
      this.showAdd = "Update"
      this.companyDetail();
    } else {
      this.showAdd = "Add"

     }
  }
  companyDetailS: any = {};
  companyDetail() {
    this.CompanyService.companyDetail(sessionStorage.getItem("companySelecteduuid")).subscribe(res => {
      this.companyDetailS = res.data;
      if(res.data.parentuuid && res.data.type == "Site"){
        this.showparent = true;
      }else{
        this.showparent = false;

      }
      this.updateForm(this.companyDetailS); 
    })
  }

  updateForm(data) { 
    let countryid = this.countryList.filter(res => {
      return res.name == data.country
    })
    if(countryid.length>0){
      countryid = countryid[0].id
    }
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
      ]],
      companyEmail:[data.companyEmail],
      website: ['', [
      ]],
      stateCode:['']
    });
    this.secondFormGroup = this.fb.group({
      PAN: [data.pan, [
      ]],
      GSTno: [data.gstno, [
      ]],
      type: [data.type, [
      ]],
      cnino:[''],
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
