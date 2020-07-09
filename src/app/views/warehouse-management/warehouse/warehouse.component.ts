import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../company-management/company.service'
import {warehouseService} from '../warehouse.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  selectedCompany:any;
  companyList:any;
  rows =   [];
  temp =[];
  columns=[];
  getCompanyList(){
    this.CompanyService.companyList().subscribe(res=>{
      this.companyList = res.data.filter(res=>{
        if(res.type == 'All' ){
          return true;
        }else{
          return false;
        }
      });
    })
  }
  constructor(private Router:Router,private CompanyService:CompanyService,private warehouseService:warehouseService) { }

  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    if(this.userdata.role == 'Admin'){
      this.getCompanyList();

    }else{
      this.change('');
    }
  }
  change(event){
    this.warehouseService.warehouseList(this.selectedCompany).subscribe(res=>{
      this.rows= this.temp =  res.data;

    })
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
    sessionStorage.setItem("warehouseSelecteduuid",data);
    this.Router.navigate(['warehouse/Update'])
    
      }}
