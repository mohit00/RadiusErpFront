import { Component, OnInit } from '@angular/core';
import { ChalanService } from '../chalan/chalan.service';

@Component({
  selector: 'app-chalan-in-report',
  templateUrl: './chalan-in-report.component.html',
  styleUrls: ['./chalan-in-report.component.scss']
})
export class ChalanInReportComponent implements OnInit {

  constructor(private ChalanService:ChalanService) { }
  chalanuuid:any
  clanData:any ;
  chalanoutData(){
    this.ChalanService.chalanInreportData(this.chalanuuid).subscribe(res=>{
      console.log(JSON.stringify(res))
      this.clanData = res;
    })
  }
  ngOnInit() {
    this.chalanuuid= sessionStorage.getItem('chalaninuuid');
    this.chalanoutData();
  }

}
