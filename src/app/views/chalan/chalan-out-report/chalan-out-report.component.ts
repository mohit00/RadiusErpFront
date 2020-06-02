import { Component, OnInit } from '@angular/core';
import { ChalanService } from '../chalan/chalan.service';

@Component({
  selector: 'app-chalan-out-report',
  templateUrl: './chalan-out-report.component.html',
  styleUrls: ['./chalan-out-report.component.scss']
})
export class ChalanOutReportComponent implements OnInit {

  constructor(private ChalanService:ChalanService) { }
chalanuuid:any
clanData:any ;
chalanoutData(){
  this.ChalanService.chalanOutreportData(this.chalanuuid).subscribe(res=>{
    console.log(JSON.stringify(res))
    this.clanData = res;
  })
}
  ngOnInit() {
   this.chalanuuid =  sessionStorage.getItem("chalanoutuuid");
   this.chalanoutData();
  }

}
