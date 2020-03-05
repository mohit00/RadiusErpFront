import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-manage-by',
  templateUrl: './company-manage-by.component.html',
  styleUrls: ['./company-manage-by.component.scss']
})
export class CompanyManageByComponent implements OnInit {

  constructor(private router:Router,private service:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getCompanyList(){
    this.service.companyList().subscribe(res=>{ 
   this.rows= this.temp =  res.data.filter((res)=>{
     if(res.type == 'All' || res.type=='Company'){
      return true;
     }else{
       return false;
     }
   });
    })
  }
  ngOnInit() {
    this.getCompanyList();
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
sessionStorage.setItem("companymanagebyuuid",data);
this.router.navigate(['company/manageBy/Add'])
  }
}
