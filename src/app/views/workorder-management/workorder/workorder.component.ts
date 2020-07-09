import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkorderService } from '../workorder.service';
import { CompanyService } from 'app/views/company-management/company.service';

@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.scss']
})
export class WorkorderComponent implements OnInit {
  companySiteLists: any;

  constructor(private router:Router,private service:WorkorderService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getWorkorderList(comapantuuid){
    this.service.workorderGet(comapantuuid).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  getWorkorderCompanyList(comapantuuid){
    this.service.workorderComapnyGet(comapantuuid).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  companyLists:any;
  companyList(){
    this.companyService.companyList().subscribe(res=>{
      this.companySiteLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'site'){
          return true
        }else{
          return false;
        }
      }); 
      this.companyLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'all'||data.type.toLowerCase() == 'company'){
          return true
        }else{
          return false;
        }
      }); 
       })
  }
  selectedgCompany:any;
  companygLists:any;
  companyUnderList(){
    this.companyService.companyUnderList(this.selectedgCompany).subscribe(res=>{
       this.companygLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() != 'vendor'){
          return true
        }else{
          return false;
        }
      }); 
       })
  }
  selectedCompany:any;
  selectedSiteCompany:any;
  change(data){
  
    if(this.selectedCompany && this.selectedSiteCompany){ 
      this.service.workorderBothComGet(this.selectedSiteCompany,this.selectedCompany).subscribe(res=>{ 
        this.rows= this.temp =  res.data; 
         }) 
    }else{
      if(data =='company'){
        this.getWorkorderCompanyList(this.selectedCompany)
  
      }else{
        this.getWorkorderList(this.selectedSiteCompany)
  
      }
    }
  }
  groupCompanyList(){
    this.companyService.companyList().subscribe(res=>{
      this.companyLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'group'){
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
    if(this.userdata.role =='Admin'){
      this.companyList();

    }else{
      
      this.groupCompanyList();
        this.change('company')
        this.selectedCompany =' ';
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
  paymenTermEdit(data){
sessionStorage.setItem("workorderSelecteduuid",data);
this.router.navigate(['workorder/Update'])

  }
  paymenTermAppend(data){
    sessionStorage.setItem("workorderSelecteduuid",data);
    this.router.navigate(['workorder/Append'])
    
      }
      paymenTermAppendList(data){
        sessionStorage.setItem("workorderSelecteduuid",data);
        this.router.navigate(['workorder/Append/list'])

      }
}
