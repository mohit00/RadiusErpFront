import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChalanService } from './chalan.service';
import { CompanyService } from 'app/views/company-management/company.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
 
 @Component({
  selector: 'app-chalan',
  templateUrl: './chalan.component.html',
  styleUrls: ['./chalan.component.scss']
})
export class ChalanComponent implements OnInit {
  companySiteLists: any;

  constructor(private Router: Router,   private AppLoaderService: AppLoaderService, private dialog1: AppConfirmService,private dialog:MatDialog,private router:Router,private service:ChalanService,private companyService:CompanyService) { }
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
  selectedCompany:any;
  selectedSiteCompany:any;
  change(data){
  
     
      
     
      this.service.chalanList(this.selectedCompany).subscribe(res=>{
       
        this.rows= this.temp =  res.data;
     
         })
        
   
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
  report(data){
    sessionStorage.setItem("chalaninuuid",data);
    this.router.navigate(['chalan/report/chalan/in'])

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
sessionStorage.setItem("chalaninuuid",data);
this.router.navigate(['chalan/in/Update'])

  }
  statusChange(data){
    const dialogRef = this.dialog.open(DialogStatusChange, {
      width: '300px',
      data: {chalanuuid: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.AppLoaderService.open();
      this.service.chalanStatus(data,result).subscribe(res=>{
        if (res.code == "200") {
          let datasend = {
            title: 'Success',
            message: res.message
          }
          this.dialog1.confirm(datasend).subscribe(res1 => {
            this.ngOnInit();
           });
        }else{
          let datasend = {
            title: 'Error',
            message: res.message
          }
          this.dialog1.confirm(datasend).subscribe(res1 => {
           });
        }
        this.AppLoaderService.close();
        

      })
     });

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

@Component({
  selector: 'chalan-status-change',
  templateUrl: 'chalanStatusdialog.html',
})
export class DialogStatusChange {

  constructor(
    public dialogRef: MatDialogRef<DialogStatusChange>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.data.status = 'InProgress';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}