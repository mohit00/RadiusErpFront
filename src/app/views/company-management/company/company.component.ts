import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  
})
export class CompanyComponent implements OnInit {
  currenturl:any;
  selectedCompany:any ='all';
  selectedType:any;
  href: string;
  constructor(private router:Router,private service:CompanyService,private dialog :AppConfirmService) {
    this.selectedType = ''
    this.currenturl = router.url;
    if(this.currenturl == '/company/Add'){}
   }
   file:any= [];;
   handleFileInput(files: any) { 
    this.file = files
    var fds = new FormData();
    fds.append("files",this.file[0]);
    if(this.currenturl == '/company/Client'){
      this.service.companyUpload('Client',fds).subscribe(res=>{
        let datasend = {
          title: 'Success',
          message: "Successfully Updated"
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.ngOnInit();
        })
      });
    }else if(this.currenturl == '/company/Vendor'){
       this.service.companyUpload('Vendor',fds).subscribe(res=>{
        let datasend = {
          title: 'Success',
          message: "Successfully Updated"
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.ngOnInit();
        })
      })
    }else{
       this.service.companyUpload('Company',fds).subscribe(res=>{
        let datasend = {
          title: 'Success',
          message: "Successfully Updated"
        }
        this.dialog.confirm(datasend).subscribe(res1 => {
          this.ngOnInit();
        })
      })
    }

      //  for(var i=0;i<files.length;i++){
      //   this.materialPic.push(files[i])
       
      // } 
  }
   change(data){
    if(this.selectedCompany == 'all'){
      this.getCompanyList()

    }else{
      this.companyUnderList(this.selectedCompany);
    }
   }
   selecteTypeList:any;
   changeType(data){
    // this.rows= this.temp =  res.data;
    if(this.selectedCompany == 'all'){
      this.getCompanyList()

    }else{
      this.companyUnderList(this.selectedCompany);
    }


   }
   companyUpload(){

   }
  rows = [];
  columns = [];
  temp = [];
  CompanyList:any;
  getCompanyList(){
    this.service.companyList().subscribe(res=>{
        if(this.selectedType == 'Client'){
        this.CompanyList = res.data.filter(res=>{
            if(res.type != 'Vendor'){return true}else return false
        })

      }else if(this.selectedType == 'Vendor'){
        this.CompanyList = res.data.filter(res=>{
          if(res.type == 'Vendor' || res.type == 'All'){return true}else return false
      })

      }else{
        this.CompanyList = res.data
      }
   this.rows= this.temp =  res.data;
   if( this.showCompany){
    // this.selectedCompany = this.CompanyList[0].uuid
    // this.change(this.selectedCompany)

   }
   if(this.selectedType){
  
    if(this.selectedType == 'Client'){
     this.rows = this.temp= this.rows.filter((data)=>{
       if(!data.iscompany && data.type != 'Vendor'){
         return true
       }else{
         return false;
       }
     })
    }else{
     this.rows = this.temp= this.rows.filter((data)=>{
       if(data.type == this.selectedType){
         return true
       }else{
         return false;
       }
     })
    }
 
  }

    })
  }
  companyUnderList(data){
    this.service.companyUnderList(data).subscribe(res=>{
      console.log(JSON.stringify(res.data)) 
   this.rows= this.temp =  res.data; 
   if(this.selectedType){
  
     if(this.selectedType == 'Client'){
      this.rows = this.temp= this.rows.filter((data)=>{
        if(!data.iscompany && data.type != 'Vendor'){
          return true
        }else{
          return false;
        }
      })
     }else{
      this.rows = this.temp= this.rows.filter((data)=>{
        if(data.type == this.selectedType){
          return true
        }else{
          return false;
        }
      })
     }
  
   }

    })
  }
  urlAdd:any = '';
  urlUpdate:any = '';

  showCompany:any = false;
  ngOnInit() {
    this.selectedType ='All'
    this.href = this.router.url;
    if (this.href == '/company') {

      this.showCompany = false
      this.urlAdd = '/company/Add'
      this.urlUpdate = '/company/Update'
    }else if(this.href == '/company/Client'){
      this.urlAdd = '/company/Client/Add'
      this.urlUpdate = '/company/Client/Update'
      this.selectedType = 'Client'

      this.showCompany = true
    }else if(this.href == '/company/Vendor'){
      this.selectedType = 'Vendor'
      this.showCompany = false
      this.urlAdd = '/company/Vendor/Add'
      this.urlUpdate = '/company/Vendor/Update'

    }
    // this.selectedCompany ='all'
     this.getCompanyList();
  }
  onActivate(event){
    if(event.type == 'click') {
      console.log(event.row.uuid); 
      this.router.navigate(['under'], {state: {data: {  title:'Company/'+ event.row.name }}});        
  }
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    var columns = Object.keys(this.temp[0]);
    // Removes last "$$index" from "column"
    columns.splice(columns.length - 1);
    // console.log(columns);
    if (!columns.length)
      return;
    const rows = this.temp.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        let column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.rows = rows;
  }
  editCompany(data){
sessionStorage.setItem("companySelecteduuid",data);

this.router.navigate([this.urlUpdate])

  }
}
