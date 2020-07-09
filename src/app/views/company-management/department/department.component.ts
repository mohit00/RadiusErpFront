import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { departmentService } from '../department.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(private router:Router,private service:departmentService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getDepartmentList(comapantuuid){
    this.service.departmentList(comapantuuid).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  companyLists:any;
  companyList(){
    this.companyService.companyList().subscribe(res=>{
      this.companyLists = res.data.filter(res=>{
        if(res.type =='All'){
          return true;
        }else{
          return false;
        }
      });
       })
  }
  selectedCompany:any;
  change(data){
    if(this.userdata.role == 'Admin'){
      this.getDepartmentList(this.selectedCompany)

    }else{
      this.getDepartmentList('')

    }

  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'))
    if(this.userdata.role == 'Admin'){

  this.companyList();
    }else{
      this.change('');
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
  departmentedit(data){
sessionStorage.setItem("deparmentSelecteduuid",data);
this.router.navigate(['company/department/Update'])

  }
}
