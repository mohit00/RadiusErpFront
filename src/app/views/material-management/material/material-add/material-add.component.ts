import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { egretAnimations } from 'app/shared/animations/egret-animations';
 import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { NavigationService } from 'app/shared/services/navigation.service';
import {materialService} from '../../material.serivce'
import {CompanyService} from '../../../company-management/company.service'
 @Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.scss']
})
export class MaterialAddComponent implements OnInit {
  rows:any =[];
  temp:any =[];
  companyList:any;
  constructor(private CompanyService:CompanyService,private materialService:materialService,private dialog:AppConfirmService,private AppLoaderService:AppLoaderService,private fb: FormBuilder,private Router:Router) { }
  href:any;
  pageType:any='';
  departmentDetails:any;
  departmentDetail(){
      this.materialService.materialDetail(sessionStorage.getItem("materialSelecteduuid")).subscribe(res=>{
        this.updateForm(res);
      });
  }
  getcompanyList(){
    this.CompanyService.companyList().subscribe(res=>{
  this.companyList =     res.data.filter(res=>{
    if(res.type =='All'){
      return true
    }else{
      return false;
    }
  });
    })
  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    this.materialListWithNoproduct();
 this.href = this.Router.url;
 if(this.userdata.role == 'Admin'){
  this.getcompanyList();

 }
if (this.href == '/material/Update') {
  this.pageType = "Update"
  this.departmentDetail();
 } else {
  this.pageType = "Add"
}
this.createForm();
  }
  handleFileInput(files: any) { 
    this.materialPic = files
      //  for(var i=0;i<files.length;i++){
      //   this.materialPic.push(files[i])
       
      // } 
  }
  tet:any;
  remove(index, type) {
    this.materialPic.splice(index, 1);
 
    
  }
  view(bill) {
    //  console.log(bill)
    if(bill.size){
     const reader = new FileReader();
     reader.readAsDataURL(bill);
     reader.onload =  ()=> {
       console.log(reader.result);
       this.tet = reader.result;
       console.log(this.tet)
       var win = window.open();
       win.document.write('<iframe src="' + this.tet  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
     };
    }else{
     window.open(environment.LOCAL_BASE+"/images/"+bill.name);
    }
 }
  fd: FormData;
  firstFormGroup: FormGroup;
  materialPic:any = [];
  createForm(){
      this.firstFormGroup = this.fb.group({
        materialName: ['', [
        ]],
         description:[''],
         isProduct:[false],
         materialDimenstion:[''],
         companyCost:[0],
         companyuuid:[],
         hsnCode:[''],
         unit:[''],
         taxRate:[''],
         materialList:[]
      });
  }
  AddMaterial(){
    // alert(this.firstFormGroup.value.materiall[0])
  }
  materialList:any;
  materialListWithNoproduct(){
    this.materialService.materialListWithNoProduct().subscribe(res=>{
       this.materialList = res.data
    })
  }
  materialUpdate:any = [];
  materialUpdateList(data){
     for(var i =0 ;i<this.materialList.length;i++){
      for(var j =0 ;j<data.length;j++){
        if(data[j].uuid == this.materialList[i].uuid){
          this.materialList[i].matqty = data[j].matQty
        this.materialUpdate.push(this.materialList[i]);
      }
      }
    }
    //  for(var j =0 ;j<this.materialList.length;i++){
    //   for(var i=0;i<data.length;i++){
    //     if(data[i].uuid == this.materialList[j].uuid){
    //         this.materialUpdate.push(this.materialList[j]);
    //     }
    //   }
    // }
     
    this.firstFormGroup.patchValue({
      materialList:this.materialUpdate
    })  
    console.log(JSON.stringify(this.firstFormGroup.value))
  }
  updateForm(data){
    this.firstFormGroup = this.fb.group({
      materialName: [data.name, [
      ]],
       description:[data.description],
       materialDimenstion:[data.materialDimenstion],
       companyCost:[data.companyCost],
       uuid:[data.uuid],
       companyuuid:[data.underCompany],
       hsnCode:[data.hsnCode],
       unit:[data.unit],
       isProduct:[data.isProduct],
       materialList:[],
       taxRate:[data.taxRate] 
    });
    if(data.isProduct){
      this.materialUpdateList(data.productMaterial);
    }
    if(data.materialPic){
      this.materialPic.push({name:data.materialPic.split('/')[data.materialPic.split('/').length -1]})

    }else{
      this.materialPic =[]
    }
  }
  public hasfirstError = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  } 
  createMaterial(){
    this.AppLoaderService.open(); 
    var fds = new FormData();
    fds.append("files",this.materialPic[0]);
    fds.append("data", JSON.stringify(this.firstFormGroup.value));
    this.materialService.materialCreate(fds).subscribe(res=>{
      this.AppLoaderService.close();
      let dataJson = {
        title:'Success',
        message:res.message
      }
     this.dialog.confirm(dataJson);
     this.Router.navigate(['material'])
    })
  }
  updateMaterial(){
    this.AppLoaderService.open(); 
    var fds = new FormData();
    fds.append("files",this.materialPic[0]);
    fds.append("data", JSON.stringify(this.firstFormGroup.value));
    this.materialService.materialUpdate(fds).subscribe(res=>{
      this.AppLoaderService.close();
      let dataJson = {
        title:'Success',
        message:res.message
      }
     this.dialog.confirm(dataJson);
     this.Router.navigate(['material'])

    }) 
  }
}
