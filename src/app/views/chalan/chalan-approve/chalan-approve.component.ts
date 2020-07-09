import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChalanService } from '../chalan/chalan.service';
import { CompanyService } from 'app/views/company-management/company.service';
@Component({
  selector: 'app-chalan-approve',
  templateUrl: './chalan-approve.component.html',
  styleUrls: ['./chalan-approve.component.scss']
})
export class ChalanApproveComponent implements OnInit {
  companySiteLists: any;

  constructor(private router:Router,private service:ChalanService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
 
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
  selectedCompany:any ='';
  selectedSiteCompany:any;
  change(data){
  
  
      
     
      this.service.chalanOutList(this.selectedCompany).subscribe(res=>{
       
        this.rows= this.temp =  res.data;
     
         })
         
  }
  chalanOutDetail(data){
    sessionStorage.setItem('chalanoutpo',data)
    this.router.navigate(['chalan/Approval/detail'])
  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    if(this.userdata.role =='Admin'){
      this.companyList();

    }else{
      this.change('')
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
  report(data){
    sessionStorage.setItem("chalanoutuuid",data);
    this.router.navigate(['chalan/report/chalan/out'])

  }
 
}
