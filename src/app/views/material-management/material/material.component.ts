import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { materialService } from '../material.serivce';
import { CompanyService } from '../../company-management/company.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  constructor(private router: Router, private service: materialService, private companyService: CompanyService) { }
  selectedMaterial = 'Both';
  changetype(data) {
     
    if (this.selectedMaterial == 'Both') { 
      this.rows = this.temp = this.materialList
    } else if (this.selectedMaterial == 'Product') {
      this.rows = this.temp = this.materialList.filter(res=>{
        if(res.isProduct){
          return true;
        }else {
          return false
        }
      })

     } else if (this.selectedMaterial == 'Material') { 
      this.rows = this.temp = this.materialList.filter(res=>{
        if(res.isProduct){
          return false;
        }else {
          return true
        }
      })

     }
  }
  rows = [];
  columns = [];
  temp = [];
  selectedCompany: any;
  materialList:any;
  getMaterialList() {

    this.service.materialList().subscribe(res => {
      this.materialList = res.data;
      this.rows = this.temp = res.data;
    })
  }
  companyList: any = [];
  getcompanyList() {
    this.companyService.companyList().subscribe(res => {
      this.companyList = res.data.filter(res => {
        if (res.type == 'All') {
          return true
        } else {
          return false;
        }
      });
    })
  }
  change(data) {
    this.service.getCompanymaterial(this.selectedCompany).subscribe(res => {
      this.materialList = res.data;

      this.rows = this.temp = res.data;

    })
  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    if(this.userdata.role == 'Admin'){

      this.getcompanyList();
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
    const rows = this.temp.filter(function (d) {
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
  departmentedit(data) {
    sessionStorage.setItem("materialSelecteduuid", data);
    this.router.navigate(['material/Update'])

  }
}
