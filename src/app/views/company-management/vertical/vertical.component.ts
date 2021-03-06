import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { verticalService } from '../vertical.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent implements OnInit {
  constructor(private router:Router,private service:verticalService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getDepartmentList(comapantuuid){
    this.service.verticalList(comapantuuid).subscribe(res=>{
       
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
     this.getDepartmentList(this.selectedCompany)

  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
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
sessionStorage.setItem("verticalSelecteduuid",data);
this.router.navigate(['company/vertical/Update'])

  }
}
