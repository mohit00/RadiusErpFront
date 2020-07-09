import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../user.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private router:Router,private service:userService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getDepartmentList(){
    this.service.userList().subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  getuserWithCompany(){
    
    this.service.userCompanyList(this.selectedCompany).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  companyLists:any;
  
  companyList(){
    this.companyService.companyList().subscribe(res=>{
      this.companyLists = res.data;
       })
  }
  
  selectedCompany:any;
  change(data){
     if(this.selectedCompany == 'all'){
      this.getDepartmentList()

    }else{
      this.getuserWithCompany()

    }

  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'))
  this.companyList();
  this.getDepartmentList();
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
sessionStorage.setItem("userSelecteduuid",data);
this.router.navigate(['company/user/Update'])

  }

}
