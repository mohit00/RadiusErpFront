import { Component, OnInit } from '@angular/core';
import { WorkorderService } from '../workorder.service';
import { CompanyService } from 'app/views/company-management/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitematerial',
  templateUrl: './sitematerial.component.html',
  styleUrls: ['./sitematerial.component.scss']
})
export class SitematerialComponent implements OnInit {

  constructor(private router:Router,private service:WorkorderService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getpaymenTermList(comapantuuid){
    this.service.siteMaterialGet(comapantuuid).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  companyLists:any;
  companygLists:any;
  companyList(){
    this.companyService.companyList().subscribe(res=>{
       this.companyLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() != 'vendor' && data.type.toLowerCase() != 'site'){
          return true
        }else{
          return false;
        }
      }); 
      this.companygLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'site'){
          return true
        }else{
          return false;
        }
      }); 
       })
  }
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
  selectedgCompany:any ;
  change(data){
     this.getpaymenTermList(this.selectedCompany)

  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    this.getpaymenTermList(this.selectedCompany)

    if(this.userdata.role =='Admin'){

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
sessionStorage.setItem("siteMaterialSelecteduuid",data);
this.router.navigate(['workorder/sitematerial/Update'])

  }
}
