import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChalanService } from '../chalan/chalan.service';
import { CompanyService } from 'app/views/company-management/company.service';
import {WorkorderService} from '../../workorder-management/workorder.service'
@Component({
  selector: 'app-chalanpm',
  templateUrl: './chalanpm.component.html',
  styleUrls: ['./chalanpm.component.scss']
})
export class ChalanpmComponent implements OnInit {
  companySiteLists: any;

  constructor(private router:Router,private service:ChalanService,private companyService:CompanyService,private workorderService:WorkorderService) { }
  rows = [];
  columns = [];
  temp = [];
  getWorkorderList(comapantuuid){
    this.workorderService.workorderGet(comapantuuid).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  getWorkorderCompanyList(comapantuuid){
    this.workorderService.workorderComapnyGet(comapantuuid).subscribe(res=>{
       
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
  selectedCompany:any;
  selectedSiteCompany:any;
  change(data){
  
    if(this.selectedCompany){
      
     
      this.service.chalanPoList(this.selectedCompany).subscribe(res=>{
       
        this.rows= this.temp =  res.data;
     
         })
        
    } 
  }
  ngOnInit() {
  this.companyList();
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
