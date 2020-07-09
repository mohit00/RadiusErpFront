import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../company-management/company.service'
import {WorkorderService} from '../workorder.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-term',
  templateUrl: './payment-term.component.html',
  styleUrls: ['./payment-term.component.scss']
})
export class PaymentTermComponent implements OnInit {

  constructor(private router:Router,private service:WorkorderService,private companyService:CompanyService) { }
  rows = [];
  columns = [];
  temp = [];
  getpaymenTermList(comapantuuid){
    this.service.paymentTermGet(comapantuuid).subscribe(res=>{
       
   this.rows= this.temp =  res.data;

    })
  }
  companyLists:any;
  companyList(){
    this.companyService.companyList().subscribe(res=>{
      this.companyLists = res.data.filter((data)=>{
        if(data.type.toLowerCase() == 'all' || data.type.toLowerCase() == 'company'){
          return true
        }else{
          return false;
        }
      }); 
       })
  }
  selectedCompany:any;
  change(data){
     this.getpaymenTermList(this.selectedCompany)

  }
  userdata:any;
  ngOnInit() {
    this.userdata = JSON.parse(sessionStorage.getItem('user'));
    if(this.userdata.role =='Admin'){
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
  paymenTermEdit(data){
sessionStorage.setItem("paymentTermSelecteduuid",data);
this.router.navigate(['workorder/payment/Update'])

  }
}
